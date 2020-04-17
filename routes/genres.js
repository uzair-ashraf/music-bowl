const route = require('express-promise-router')()
const sql = require('../services/db')

route
  .get('/', async (req, res, next) => {
    try {
      const genres = await sql`
    SELECT * FROM genre;
    `
      res.json(genres)
    } catch (err) {
      console.error(err)
      next(err)
    }
  })

module.exports = route
