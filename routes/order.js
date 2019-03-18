const express = require('express');
const orderRouter = express.Router();
const OrderServices = require('../services/order');

orderRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;

  OrderServices.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = orderRouter;