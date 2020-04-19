const route = require('express-promise-router')()
const sql = require('../services/db')

route
  .post('/', async (req, res, next) => {
    const providerTable = {
      youtube: 1,
      spotify: 2
    }
    req.body.provider_id = providerTable[req.body.provider_id]
    req.body.user_id = req.session.userId

    console.log(req.body)

    const response = await sql`
    INSERT INTO songs ${
      sql(req.body, 'title', 'url', 'provider_id', 'genre_id', 'user_id', 'video_id')
    }
    `
    console.log(response)

  })

module.exports = route
