const route = require('express-promise-router')()
const sql = require('../services/db')
const { AuthError, ServerError } = require('../services/errorhandling')

route
  .get('/', async (req, res, next) => {
    try {
      if (!req.session.userId) throw new AuthError()
      const { userId } = req.session
      const userData = await sql`
        SELECT username, email, image FROM users
        WHERE user_id = ${userId}
      `
      if (!userData.count) throw new ServerError('Unable to process your request at this time', 503)

      const [response] = userData

      res.json(response)

    } catch (err) {
      console.error(err)
      next(err)
    }

  })

module.exports = route
