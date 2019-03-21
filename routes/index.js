const express = require('express');
const router = express();

router.use('/user', require('./user'));
router.use('/order', require('./order'));
router.use('/store', require('./store'));
router.use('/product', require('./product'));

module.exports = router;