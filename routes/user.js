const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');

userRouter.get('/', (req, res, next) => {
  UserService.read()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

// get all orders from user

module.exports = userRouter;