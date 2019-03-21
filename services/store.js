const { db } = require('./dbConnect.js');
const StoreService = {};

StoreService.getStoreProducts = (id) => {
  const sql = `
    SELECT 
      products.*
    FROM stores
    JOIN products
      ON stores.id = products.store_id
    WHERE
      stores.id = $[id]
  `;
  return db.any(sql, { id });
}

//I want to get all order for store id that I pass in
//Products have the reference to a store ID
//Orderline has a reference to the products id
//Orderline also has reference to Order id
//I would have to make some stor of join with products, order and orderling to get orders for specific store
StoreService.getStoreOrders = (id) => {
  const sql = `
    SELECT 
      orders.*
    FROM orders
    JOIN orderline
      ON orders.id = orderline.order_id  
    WHERE
      .id = $[id]
  `;
  return db.any(sql, { id });
}

module.exports = StoreService;
