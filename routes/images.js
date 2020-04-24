const route = require('express-promise-router')()
const uploadS3 = require('../services/s3')
const sql = require('../services/db')
const { ClientError, ServerError, AuthError } = require('../services/errorhandling')

const uploadImage = uploadS3.single('profile-image')

route.post('/', async (req, res, next) => {
  try {
    if (!req.session.userId) throw new AuthError()

    const url = await new Promise((resolve, reject) => {
      uploadImage(req, res, err => {
        if (err) {
          if (err.code === 'LIMIT_FILE_SIZE') {
            reject(new ClientError('Image must be less than 1mb in size', 413))
          } else if (err instanceof ClientError) {
            reject(err)
          } else {
            reject(new ServerError('Unexpected Error Occurred', 500))
          }
        } else {
          resolve(req.file.location)
        }
      })
    })

    const { userId } = req.session
    const response = await sql`
      UPDATE users SET ${
        sql({ image: url }, 'image')
      }
      WHERE user_id = ${userId}
      RETURNING image;
    `
    if (!response.count) {
      throw new ServerError('Unexpected Error Occurred', 500)
    } else {
      const [{ image }] = response
      res.json({ image })
    }

  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = route
