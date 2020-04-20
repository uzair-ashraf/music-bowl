const route = require('express-promise-router')()
const sql = require('../services/db')
const { ServerError, AuthError } = require('../services/errorhandling')

route
  .post('/', async (req, res, next) => {
    try {
      if (!req.session.userId) throw new AuthError()
      const providerTable = {
        youtube: 1,
        spotify: 2
      }
      req.body.provider_id = providerTable[req.body.provider_id]
      req.body.user_id = req.session.userId
      const response = await sql`
      INSERT INTO songs ${
        sql(req.body, 'title', 'url', 'provider_id', 'genre_id', 'user_id', 'video_id')
      }
      `
      if (response.count) {
        res.json({
          success: true
        })
      } else {
        throw new ServerError('Unable to process your request at this time', 503)
      }
    } catch (err) {
      if (err.code === '23505') {
        res.status(409).json({
          success: false,
          message: 'You have already recommended this song.'
        })
      } else {
        next(err)
      }
    }

  })

module.exports = route
