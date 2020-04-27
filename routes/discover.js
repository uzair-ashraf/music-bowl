/* eslint-disable camelcase */
const route = require('express-promise-router')()
const sql = require('../services/db')
const { AuthError } = require('../services/errorhandling')

route
  .get('/:genreId', async (req, res, next) => {
    try {
      if (!req.session.userId) throw new AuthError()
      const { userId } = req.session
      const { genreId } = req.params
      const songs = isNaN(genreId)
        ? await sql`
                          SELECT
                            s.song_id,
                            u.username,
                            s.title,
                            s.url,
                            s.video_id,
                            p.provider_name,
                            g.genre
                          FROM
                            songs AS s
                          INNER JOIN
                            providers AS p
                          ON
                            s.provider_id = p.provider_id
                          INNER JOIN
                            genre AS g
                          ON
                            s.genre_id = g.genre_id
                          INNER JOIN
                            users as u
                          ON
                            s.user_id = u.user_id
                          WHERE
                            s.user_id != ${userId}
                          AND
                            s.song_id
                          NOT IN (
                          SELECT
                            song_id
                          FROM
                            favorites AS f
                          WHERE
                            f.user_id = ${userId}
                          )
                          ORDER BY random()
                          ;
                      `
        : await sql`
                          SELECT
                            s.song_id,
                            u.username,
                            s.title,
                            s.url,
                            s.video_id,
                            p.provider_name,
                            g.genre
                          FROM
                            songs AS s
                          INNER JOIN
                            providers AS p
                          ON
                            s.provider_id = p.provider_id
                          INNER JOIN
                            genre AS g
                          ON
                            s.genre_id = g.genre_id
                          INNER JOIN
                            users as u
                          ON
                            s.user_id = u.user_id
                          WHERE
                            s.genre_id = ${genreId}
                          AND
                            s.user_id != ${userId}
                          AND
                            s.song_id
                          NOT IN (
                          SELECT
                            song_id
                          FROM
                            favorites AS f
                          WHERE
                            f.user_id = ${userId}
                          )
                          ORDER BY random()
                          ;
                    `
      res.json(songs)

    } catch (err) {
      console.error(err)
      next(err)
    }
  })
  .post('/:songId', async (req, res, next) => {
    try {
      if (!req.session.userId) throw new AuthError()
      const { userId: user_id } = req.session
      const { songId: song_id } = req.params
      const insertedId = await sql`
        INSERT INTO favorites ${
        sql({ user_id, song_id }, 'user_id', 'song_id')
        }
        RETURNING song_id
      `
      res.json({
        insertedId
      })
    } catch (err) {
      console.error(err)
      next(err)
    }
  })

module.exports = route
