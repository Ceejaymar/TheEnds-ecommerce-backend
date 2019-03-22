const express = require('express');
const storeRouter = express.Router();
const StoreService = require('../services/store');

// Get all products for one store
storeRouter.get('/:id/products', (req, res, next) => {
  const { id } = req.params;

  StoreService.getStoreProducts(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

// Get all orders for one store
storeRouter.get('/:id/orders', (req, res, next) => {
  const { id } = req.params;

  StoreService.getStoreOrders(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

// Update store info
storeRouter.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, address, city, state, zipcode } = req.body;

  StoreService.update(id, name, address, city, state, zipcode)
    .then(data => {
      res.json("Success: Store updated");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = storeRouter;