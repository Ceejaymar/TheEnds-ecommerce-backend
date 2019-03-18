const express = require('express');
const router = express();

router.use('/user', require('./user'));
router.use('/order', require('./order'));

module.exports = router;