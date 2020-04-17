const router = require('express-promise-router')()

const login = require('./login')
const genres = require('./genres')
const urltester = require('./urltester')

router
  .use('/login', login)
  .use('/genres', genres)
  .use('/urltester', urltester)

module.exports = router
