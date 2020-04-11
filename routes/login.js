const express = require('express')
const bcrypt = require('bcrypt')
const route = express.Router()
const sql = require('../services/db')
const ClientError = require('../services/errorhandling')

route
  .post('/', async (req, res) => {
    const { username, password } = req.body
    if (req.session.userId) {
      res.json({
        message: 'already logged in'
      })
      return
    }
    console.log(username, password)
    try {
      const userData = await sql`
      SELECT * FROM users
      WHERE username = ${username}
      `
      if (!userData.count) {
        throw new ClientError('Username is invalid', 401, res)
      }
      const hash = await bcrypt.hash(password, 12)

      console.log(hash)
    } catch (err) {
      console.error(err.message)
    }

  })

module.exports = route
