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
  const { customer, total, status } = req.body;

  OrderServices.create(customer, total, status)
    .then(data => {
      res.json(`Success: Order created with id: ${data.id}`)
    })
    .catch(err => {
      next(err);
    });
});

// Update order info
orderRouter.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  OrderServices.update(id, status)
    .then(() => {
      res.json("Success: Order updated");
    })
    .catch(err => {
      next(err);
    });
});


module.exports = orderRouter;