const express = require('express');
const router = express();

router.use('/user', require('./user'));

module.exports = router;