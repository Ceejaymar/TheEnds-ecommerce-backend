const express = require('express');
const storeRouter = express.Router();
const StoreService = require('../services/store');

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

module.exports = storeRouter;