const router = require('express').Router()
const ShareController = require('../controller/ShareController')

router.post('/', ShareController.shareToPinterest)

module.exports = router