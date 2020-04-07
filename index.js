require('dotenv').config()
const express = require('express')
const next = require('next')
const path = require('path')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: 'client/', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(express.static(path.join(__dirname, '/public')))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`Server listening on port ${port}`)
  })
})
