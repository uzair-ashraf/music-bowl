const router = require('express-promise-router')()

const login = require('./login')

router
  .use('/login', login)

module.exports = router
