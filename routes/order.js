const express = require('express');
const orderRouter = express.Router();
const OrderServices = require('../services/order');

// Get order info
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

// Create order info
orderRouter.post('/', (req, res, next) => {
  const { customer, total, status, order_id } = req.body;

  OrderServices.create(customer, total, status, order_id)
    .then(data => {
      res.json("Success: Order created")
    })
    .catch(err => {
      next(err);
    });
});

// Update order info


module.exports = orderRouter;