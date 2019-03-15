const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
  console.log('this is working fammmm');
  res.json('this is working fam');
});

module.exports = userRouter;