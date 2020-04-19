const bcrypt = require('bcrypt')
const route = require('express-promise-router')()
const sql = require('../services/db')
const { ClientError } = require('../services/errorhandling')

route
  .post('/', async (req, res, next) => {
    const { username, password } = req.body
    if (req.session.userId) {
      res.json({
        message: 'already logged in'
      })
      return
    }
    try {
      const userData = await sql`
      SELECT * FROM users
      WHERE username = ${username}
      `

      if (!userData.count) {
        throw new ClientError('Invalid Username or Password', 401)
      }

      const [completeUserData] = userData

      const isPasswordValid = await bcrypt.compare(password, completeUserData.password)

      if (!isPasswordValid) {
        throw new ClientError('Invalid Username or Password', 401)
      }

      req.session.userId = completeUserData.user_id
      console.log(req.session)
      res.json({
        message: 'User logged in successfully!'
      })

    } catch (err) {
      next(err)
    }

  })

module.exports = route
