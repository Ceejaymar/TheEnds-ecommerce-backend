const express = require('express');
const storeRouter = express.Router();
const StoreService = require('../services/store');

// Get list of all stores
storeRouter.get('/', (req, res, next) => {
  StoreService.getStoreList()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

// Get store info
storeRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;

  StoreService.getStoreInfo(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

// Create a store
storeRouter.post('/', (req, res, next) => {
  const { user_id, name, address, city, state, zipcode, images } = req.body;

  StoreService.create(user_id, name, address, city, state, zipcode, images)
    .then(data => {
      res.json(`Success: Store created with ID: ${data.id}`);
    })
    .catch(err => {
      next(err);
    });
  });

// Update store info
storeRouter.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, address, city, state, zipcode, images } = req.body;

  StoreService.update(id, name, address, city, state, zipcode, images)
    .then(() => {
      res.json("Success: Store updated");
    })
    .catch(err => {
      next(err);
    });
  });

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

storeRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  StoreService.delete(id)
    .then(() => {
      res.json(`Success: Deleted store with ID: ${id}`)
    })
    .catch(err => {
      next(err);
    });
});

module.exports = storeRouter;
