const { db } = require('./dbConnect');
const OrderService = {};

OrderService.readAllOrders = () => {
  const sql = `
    SELECT *
    FROM orders
  `;
  return db.any(sql);
};


OrderService.read = (id) => {
  const sql = `
    SELECT
      orders.id AS orders_id,
      orders.customer,
      orders.total,
      orders.status,
      orders.createdat,
      orderline.product_id,
      orderline.size,
      orderline.quantity,
      products.name,
      products.url,
      products.price AS product_price
    FROM orders
    JOIN orderline
      ON orders.id = orderline.order_id
    JOIN products
      ON orderline.product_id = products.id
    WHERE
      orders.id = $[id]
  `;
  return db.any(sql, { id });
};

OrderService.create = (customer, total, status) => {
  const sql = `
    INSERT INTO
      orders (customer, total, status)
    VALUES
      ($[customer], $[total], $[status])
    RETURNING id;
  `;
  return db.one(sql, { customer, total, status });
};

OrderService.update = (id, status) => {
  const sql = `
    UPDATE
      orders
    SET
      status = $[status],
      updatedat = NOW()
    WHERE
      orders.id = $[id]
  `;
  return db.none(sql, { id, status })
};

OrderService.delete = (id) => {
  const sql = `
  DELETE FROM
    orders
  WHERE
    orders.id = $[id]
  `;
  return db.none(sql, { id });
};

module.exports = OrderService;
