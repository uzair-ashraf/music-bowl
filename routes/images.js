// Load the AWS SDK for Node.js
var AWS = require('aws-sdk')
// Set the region
AWS.config.update({ region: 'us-east-2' })

// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

const bucketParams = {
  Bucket: 'ashraf-bucket'
}

// Call S3 to list the buckets
s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log('Error', err)
  } else {
    console.log('Success', data)
  }
})
