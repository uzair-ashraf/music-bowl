const route = require('express-promise-router')()
const bcrypt = require('bcrypt')
const sql = require('../services/db')
const { ClientError, ServerError } = require('../services/errorhandling')

route
  .post('/', async (req, res, next) => {
    const { username, password, email } = req.body
    try {

      const hash = await bcrypt.hash(password, 12)

      const response = await sql`
      INSERT INTO users ${
        sql({ username, password: hash, email }, 'username', 'password', 'email')
      }
      `
      res.json({ success: true })
    } catch (err) {
      if (err.code === '23505') {
        next(new ClientError(
          err.constraint_name,
          409
        ))
      } else {
        next(err)
      }
    }
  })

module.exports = route
