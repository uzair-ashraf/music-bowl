const router = require('express-promise-router')()

const login = require('./login')
const genres = require('./genres')

router
  .use('/login', login)
  .use('/genres', genres)

module.exports = router
