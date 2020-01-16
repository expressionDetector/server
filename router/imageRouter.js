const router = require('express').Router()
const ImageController = require('../controller/ImageController')
const upload = require('../helper/gcsUpload')

router.get('/test', ImageController.test)
router.post('/singleUpload', upload.single('file'), ImageController.uploadIMage)
router.post('/detection', ImageController.detectImage)

module.exports = router