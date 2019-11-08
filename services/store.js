const { db } = require('./dbConnect.js');
const StoreService = {};

StoreService.getStoreList = () => {
  const sql = `
    SELECT *
    FROM stores
  `
  return db.any(sql);
};

StoreService.getStoreInfo = (id) => {
  const sql = `
    SELECT
      stores.*
    FROM
      stores
    WHERE
      stores.id = $[id]
  `;
  return db.one(sql, { id });
};

StoreService.getStoreProducts = (id) => {
  const sql = `
    SELECT
      stores.name AS store_name,
      products.id,
      products.name,
      products.price,
      products.url
    FROM stores
    JOIN products
      ON stores.id = products.store_id
    WHERE
      stores.id = $[id]
  `;
  return db.any(sql, { id });
};

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
};

StoreService.create = (user_id, name, address, city, state, zipcode, images) => {
  const sql = `
    INSERT INTO
      stores (name, user_id, address, city, state, zipcode, images)
    VALUES
      ($[name], $[user_id], $[address], $[city], $[state], $[zipcode], $[images])
    RETURNING id;
  `;
  return db.one(sql, { name, user_id, address, city, state, zipcode, images });
};

StoreService.update = (id, name, address, city, state, zipcode, images) => {
  const sql = `
    UPDATE
      stores
    SET
      name = $[name],
      address = $[address],
      city = $[city],
      state = $[state],
      zipcode = $[zipcode],
      images = $[images],
      updatedat = NOW()
    WHERE
      stores.id = $[id]
  `;
  return db.none(sql, { id, name, address, city, state, zipcode, images });
};

StoreService.delete = (id) => {
  const sql = `
  DELETE FROM
    stores
  WHERE
    stores.id = $[id]
  `;
  return db.none(sql, { id });
}

module.exports = StoreService;
