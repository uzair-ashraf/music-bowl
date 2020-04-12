require('dotenv').config()
require('./services/db')
const express = require('express')
const next = require('next')
const path = require('path')
const session = require('express-session')
const ClientError = require('./services/errorhandling')
const FileStore = require('session-file-store')(session)

const fileStoreOptions = {
  path: './sessions'
}

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: 'client/', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(session({
    store: new FileStore(fileStoreOptions),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }))
  server.use(express.static(path.join(__dirname, '/public')))

  server.use(express.json())

  server.use('/api', require('./routes/routes'))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.use((err, req, res, next) => {
    if (err instanceof ClientError) {
      res.status(err.status).json({
        message: err.message
      })
    } else {
      next()
    }
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`Server listening on port ${port}`)
  })
})
