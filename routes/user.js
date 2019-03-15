const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/user');

userRouter.post('/', (req, res, next) => {
  const { fname, lname, username, email, password, address, city, state, zipcode, seller } = req.body;

  UserService.create(fname, lname, username, email, password, address, city, state, zipcode, seller)
    .then(data => {
      res.json(`Success: New user created with ID: ${data.id}`);
    })
    .catch(err => {
      next(err);
    });
});

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

userRouter.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { fname, lname, username, email, password, address, city, state, zipcode, seller } = req.body;
  
  UserService.update(id, fname, lname, username, email, password, address, city, state, zipcode, seller)
    .then(data => {
      res.json('Success: Profile has been updated');
    })
    .catch(err => {
      next(err);
    });
});

userRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  UserService.delete(id)
    .then(data => {
      res.json( "Success: Your account has been deleted");
    })
    .catch(err => {
      next(err);
    });
});

// userRouter.get('/:id', (req, res, next) => {
//   UserService.read
// })


// get all orders from user
// 

module.exports = userRouter;