const router = require('express-promise-router')()

const login = require('./login')
const genres = require('./genres')
const urltester = require('./urltester')
const upload = require('./upload')

router
  .use('/login', login)
  .use('/genres', genres)
  .use('/urltester', urltester)
  .use('/upload', upload)

module.exports = router
