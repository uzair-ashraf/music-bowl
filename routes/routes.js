const router = require('express-promise-router')()

const login = require('./login')
const genres = require('./genres')
const urltester = require('./urltester')
const upload = require('./upload')
const library = require('./library')
const users = require('./users')
const images = require('./images')
const signup = require('./signup')
router
  .use('/login', login)
  .use('/signup', signup)
  .use('/genres', genres)
  .use('/urltester', urltester)
  .use('/upload', upload)
  .use('/library', library)
  .use('/users', users)
  .use('/images', images)

module.exports = router
