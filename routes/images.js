const route = require('express-promise-router')()
const s3 = require('../services/s3')
const db = require('../services/db')
const fs = require('fs')
const path = require('path')

route.post('/', async (req, res, next) => {
  try {
    const uploadParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: '',
      Body: ''
    }

    // Call S3 to list the buckets
    // s3.listObjects(bucketParams, function (err, data) {
    //   if (err) {
    //     console.log('Error', err)
    //   } else {
    //     console.log('Success', data)
    //   }
    // })

    // var file = process.argv[3];

    // Configure the file stream and obtain the upload parameters
    // var fileStream = fs.createReadStream(file);

    // fileStream.on('error', function (err) {
    //   console.log('File Error', err);
    // });
    // uploadParams.Body = fileStream;
    // uploadParams.Key = path.basename(file);

    // s3.putObject({
    //   Bucket: BUCKET,
    //   Body: fs.readFileSync(localImage),
    //   Key: imageRemoteName
    // })
    //   .promise()
    //   .then(response => {
    //     console.log(`done! - `, response)
    //     console.log(
    //       `The URL is ${s3.getSignedUrl('getObject', { Bucket: BUCKET, Key: imageRemoteName })}`
    //     )
    //   })
    //   .catch(err => {
    //     console.log('failed:', err)
    //   })

    // // call S3 to retrieve upload file to specified bucket
    // s3.upload(uploadParams, function (err, data) {
    //   if (err) {
    //     console.log("Error", err);
    //   } if (data) {
    //     console.log("Upload Success", data.Location);
    //   }
    // });
  } catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = route
