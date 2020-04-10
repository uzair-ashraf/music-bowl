const express = require('express')

const route = express.Router()

route
  .post('/', (req, res) => {
    console.log(req.session)
    console.log('login endpoint hit')
  })

module.exports = route
