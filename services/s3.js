const AWS = require('aws-sdk')
const multer = require('multer')
const multers3 = require('multer-s3')
const { ClientError } = require('../services/errorhandling')

AWS.config.update({
  region: 'us-east-2'
})

const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/gif' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(new ClientError('Unsupported File Type', 415))
  }
}

const uploadS3 = multer({
  fileFilter,
  limits: { fileSize: 1000000 },
  storage: multers3({
    s3,
    bucket: process.env.AWS_BUCKET,
    acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname })
    },
    key: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
})

module.exports = uploadS3
