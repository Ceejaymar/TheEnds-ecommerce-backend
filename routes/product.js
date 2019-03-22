const express = require('express');
const productRouter = express.Router();
const ProductService = require('../services/product');

// Get product info 
productRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;

  ProductService.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

// Update product
productRouter.put('/id', (req, res, next) => {
  // const { id } = req.params;
  const { name, price, category, description, url, stock } = req.body;

  ProductService.update(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

// Delete product
productRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  ProductService.delete(id)
    .then(data => {
      res.json("Success: Product deleted");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = productRouter;