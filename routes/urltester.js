const route = require('express-promise-router')()
const { ClientError } = require('../services/errorhandling')
const fetch = require('node-fetch')

console.log(process.env.SPOTIFY_API)

route
  .post('/', async (req, res, next) => {
    const { url } = req.body
    const tests = {
      youtube: /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
      spotify: /(https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/
    }
    let response = null
    if (tests.youtube.test(url)) {
      const videoId = new URL(url).searchParams.get('v')
      response = {
        provider: 'youtube',
        videoId
      }
    } else if (tests.spotify.test(url)) {
      const videoPath = new URL(url).pathname
      let videoId = null
      const [, pathType, spotifyId] = videoPath.split('/')
      if(pathType !== 'track') {
        throw new ClientError('Only single song links are supported', 406)
      }
      try {
        const encodedSpotifySecret = Buffer.from(process.env.SPOTIFY_API_ID + ':' + process.env.SPOTIFY_API_SECRET).toString('base64')
        const token = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${encodedSpotifySecret}`
          },
          body: "grant_type=client_credentials",
        })
        const {access_token} = await token.json();
        const spotifyRes = await fetch(`https://api.spotify.com/v1/tracks/${spotifyId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
          }
        })
        const songData = await spotifyRes.json()
        videoId = songData.uri
        response = {
          provider: 'spotify',
          videoId,
          songData
        }
      } catch (err) {
        console.error(err)
        next(err)
      }
    } else {
      throw new ClientError('Invalid URL', 406)
    }
    response.url = url
    res.json(response)
  })

module.exports = route
