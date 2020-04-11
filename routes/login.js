const express = require('express')
const bcrypt = require('bcrypt')
const route = express.Router()

route
  .post('/', (req, res) => {
    console.log(req.session)
    console.log('login endpoint hit')
    const { username, password } = req.body
    console.log(username, password)
    bcrypt.hash(password, 12, (err, hash) => {
      if (err) console.error(err)
      console.log(hash)
    })
  })

module.exports = route
