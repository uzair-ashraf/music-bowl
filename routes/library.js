const route = require('express-promise-router')()
const sql = require('../services/db')
const { AuthError } = require('../services/errorhandling')

route
  .get('/', async (req, res, next) => {
    try {
      if (!req.session.userId) throw new AuthError()
      const { userId } = req.session
      const response = {
        uploads: [],
        favorites: []
      }
      const uploadsData = await sql`
          SELECT
            s.song_id,
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
          WHERE
            s.user_id = ${userId}
          ORDER BY
            s.song_id DESC
          ;
      `
      response.uploads = uploadsData
      res.json(response)
    } catch (err) {
      console.error(err)
      next(err)
    }
  })

module.exports = route
