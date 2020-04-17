const route = require('express-promise-router')()
const fetch = require('node-fetch')
route
  .post('/', async (req, res, next) => {
    const { url } = req.body
    console.log(url)
    res.json({ url })
  })

module.exports = route
