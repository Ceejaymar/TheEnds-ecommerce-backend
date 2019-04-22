# The Ends backend

The Ends is is a fun project I am working on to bring a lot of what I know and some new things together. Still a work in progress. 

If you would like to see The Ends frontend, click :point_right: https://github.com/Ceejaymar/TheEnds-ecommerce-frontend

## Routes

- ### User
  - `GET '/'` : Get all users.
  - `GET '/:id'` : Get information for a specific user. <!-- Prob needs to be move to orders routes. -->
  - `GET '/:id/orders'` : Get all orders made by a user.
  - `POST '/'` : Create a new user.
  - `PUT '/:id'` :  Update an existing user.
  - `DELETE '/:id'` : Delete a user.

- ### Store
  - `GET '/'` : Get information for all stores.
  - `GET '/:id'` : Get information for a specific store.
  - `GET '/:id/products'` : Get all products for a store.
  - `GET '/:id/orders'` : Get all orders for a store.
  - `POST '/'` : Create a store.
  - `PUT '/:id'` : Update an existing store's information.
  - `DELETE '/:id'` : Delete a store.

- ### Product
  - `GET '/'` : Get all products.
  - `GET '/:id'` : Get information for a specific product.
  - `POST '/'` : Get information for specific product. 
  - `PUT '/:id'` : Update and existing product.
  - `DELETE '/:id'` : Delete a product.

- ### Order
  - `GET '/'` : Get all orders.
  - `GET '/:id'` : Get information for a specific order.
  - `POST '/'` : Create new order.
  - `PUT '/:id'` : Update existing order order.
  - `DELETE '/:id'` : Delete an order.

<!-- - ### Orderline
  - `GET '/'` : 
  - `POST '/:id'` : 
  - `PUT '/:id'` : 
  - `DELETE '/:id'` :  -->

## Demo

Hosted demo: [The Ends - backend](http://the-ends.herokuapp.com)

## Setup project locally

After you cloning the repository, navigate to the project in your terminal.

Make sure you have [Postgres](https://postgresapp.com/) installed and running.

Install dependencies: `npm install`

Seed database: `npm run seed`

Start in development mode: `npm run start:local`

You can open in your browser to get the welcome message and make sure app is running. [http://localhost:3001](http://localhost:3001) 

Open [Postman](https://www.getpostman.com/) or another API development environment.

Use this Postman collection below to test routes. 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d58591b805d73f2288bb)

## Tools
- Node
- Express
- Postgres
- SQL
- Firebase

#

__Thank you!__