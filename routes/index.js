const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
  res.json('Welcome to The Ends');
});

router.use('/user', require('./user'));
router.use('/order', require('./order'));
router.use('/store', require('./store'));
router.use('/product', require('./product'));

router.use('/checkout', require('./stripeCheckout'));

module.exports = router;
