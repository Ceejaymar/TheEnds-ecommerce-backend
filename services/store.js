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

StoreService.getStoreOrders = (id) => {
  const sql = `
    SELECT DISTINCT
      orders.*
    FROM stores
    JOIN orderline
      ON stores.id = orderline.store_id
    JOIN orders
      ON orders.id = orderline.order_id
    WHERE
      orderline.store_id = $[id]
  `;
  return db.any(sql, { id });
}

StoreService.update = (id, name, address, city, state, zipcode) => {
  const sql = `
    UPDATE stores
    SET
      name = $[name], 
      address = $[address], 
      city = $[city], 
      state = $[state], 
      zipcode = $[zipcode]
    WHERE
      stores.id = $[id]
  `;
  return db.none(sql, { id, name, address, city, state, zipcode });
};

module.exports = StoreService;
