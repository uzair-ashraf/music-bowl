const router = require('express-promise-router')()

const login = require('./login')
const genres = require('./genres')
const urltester = require('./urltester')
const upload = require('./upload')
const library = require('./library')

router
  .use('/login', login)
  .use('/genres', genres)
  .use('/urltester', urltester)
  .use('/upload', upload)
  .use('/library', library)

module.exports = router
