const route = require('express-promise-router')()
const ClientError = require('../services/errorhandling')

route
  .post('/', (req, res, next) => {
    const { url } = req.body
    const tests = {
      youtube: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
      spotify: /(https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/
    }
    let response = null
    if (tests.youtube.test(url)) {
      response = {
        provider: 'youtube'
      }
    } else if (tests.spotify.test(url)) {
      response = {
        provider: 'spotify'
      }
    } else {
      throw new ClientError('Invalid URL', 406)
    }
    response.url = url
    res.json(response)
  })

module.exports = route
