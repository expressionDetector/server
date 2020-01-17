const gcsUpload = require('gcs-upload')

module.exports = gcsUpload({
    limits: {
        fileSize: 1e6 // in bytes
      },
      gcsConfig: {
        // keyFilename: './expression-detector-75bc5c7a822d.json',
        bucketName: 'ed-h8-storage'
      }
})