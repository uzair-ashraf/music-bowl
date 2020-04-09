const express = require('express')

const route = express.Router()

route
  .post('/', (req, res) => {
    console.log(req.body)
    console.log('login endpoint hit')
  })

module.exports = route
