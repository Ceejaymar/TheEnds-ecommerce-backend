const { db } = require('./dbconnect');
const OrderService = {};

OrderService.read = (id) => {
  const sql = `
    SELECT  
      orders.*,
      orderline.*,
      products.price
    FROM orders
    JOIN orderline
      ON orders.id = orderline.order_id
    JOIN products
      ON orderline.product_id = products.id
    WHERE
      orders.id = $[id]
  `;
  return db.any(sql, { id });
}

module.exports = OrderService;