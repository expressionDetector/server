const router = require('express').Router()

router.use('/image', require('./imageRouter'))
router.use('/share', require('./shareRouter'))

module.exports = router