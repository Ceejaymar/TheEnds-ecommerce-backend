[![DeepScan grade](https://deepscan.io/api/teams/6084/projects/8625/branches/107028/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=6084&pid=8625&bid=107028)

# The Ends backend

The Ends is a fun project I am working on to bring a lot of what I know and some new things together. Still a work in progress.

If you would like to see The Ends frontend, click :point_right: https://github.com/Ceejaymar/TheEnds-ecommerce-frontend

## Routes

- ### `/user`
  - `GET '/'` : Get all users.
  - `GET '/:id'` : Get information for a specific user.
  - `GET '/:id/orders'` : Get all orders made by a user. <!-- Prob needs to be moved to orders routes. -->
  - `POST '/'` : Create a new user.
  - `PUT '/:id'` :  Update an existing user.
  - `DELETE '/:id'` : Delete a user.

- ### `/store`
  - `GET '/'` : Get information for all stores.
  - `GET '/:id'` : Get information for a specific store.
  - `GET '/:id/products'` : Get all products for a store.
  - `GET '/:id/orders'` : Get all orders for a store.
  - `POST '/'` : Create a store.
  - `PUT '/:id'` : Update an existing store.
  - `DELETE '/:id'` : Delete a store.

- ### `/product`
  - `GET '/'` : Get all products.
  - `GET '/:id'` : Get information for a specific product.
  - `POST '/'` : Create a new product.
  - `PUT '/:id'` : Update an existing product.
  - `DELETE '/:id'` : Delete a product.

- ### `/order`
  - `GET '/'` : Get all orders.
  - `GET '/:id'` : Get information for a specific order.
  - `POST '/'` : Create new order.
  - `PUT '/:id'` : Update an existing order.
  - `DELETE '/:id'` : Delete an order.

<!-- - ### Orderline
  - `GET '/'` :
  - `POST '/:id'` :
  - `PUT '/:id'` :
  - `DELETE '/:id'` :  -->

## Demo

Hosted demo: [The Ends - backend](http://the-ends.herokuapp.com)

## Setup project locally

After cloning the repository, navigate to the project in your terminal.

Make sure you have [Postgres](https://postgresapp.com/) installed and running.

Install dependencies: `npm install`

Seed database: `npm run seed`

Start in development mode: `npm run dev`

You can open http://localhost:3001 in your browser to get the welcome message.

Open [Postman](https://www.getpostman.com/) or another API development environment.

Use this Postman collection below to test routes.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d58591b805d73f2288bb)

## Tools
- Node
- Express
- Postgres
- SQL
- Travis CI
- Firebase

#

__Thank you!__
