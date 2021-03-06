const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');
const { checkToken  } = require('../utilities');

// Get specific user info
userRouter.get('/', (req, res, next) => {
  UserService.readAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

// Create new user
userRouter.post('/', (req, res, next) => {
  const { fname, lname, email, uid, address, city, state, zipcode, seller } = req.body;

  UserService.create(fname, lname, email, uid, address, city, state, zipcode, seller)
    .then(data => {
      res.json(`Success: New user created with ID: ${data.id}`);
    })
    .catch(err => {
      next(err);
    });
});

// Get specific user info
userRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;

  UserService.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

userRouter.get('/:id/protected', checkToken, (req, res, next) => {
  const { id } = req.params;

  UserService.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

// Update user
userRouter.put('/:id', checkToken, (req, res, next) => {
  const { id } = req.params;
  const { fname, lname, username, email, password, address, city, state, zipcode, seller } = req.body;

  UserService.update(id, fname, lname, username, email, password, address, city, state, zipcode, seller)
    .then(() => {
      res.json('Success: Profile has been updated');
    })
    .catch(err => {
      next(err);
    });
});

// Delete user
userRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  UserService.delete(id)
    .then(() => {
      res.json( "Success: Your account has been deleted");
    })
    .catch(err => {
      next(err);
    });
});

// Get all orders for one user
userRouter.get('/:id/orders', (req, res, next) => {
  const { id } = req.params;

  UserService.getUserOrders(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = userRouter;
