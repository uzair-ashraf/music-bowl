const route = require('express-promise-router')()

route
  .post('/', async (req, res, next) => {
    const providerTable = {
      youtube: 1,
      spotify: 2
    }
  })

module.exports = route
