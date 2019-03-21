const { db } = require('./dbConnect');
const ProductService = {};

ProductService.read = (id) => {
  const sql = `
    SELECT * 
    FROM products
    WHERE 
      products.id = $[id]
  `;
  return db.one(sql, { id });
};

// Needs to cascade
ProductService.delete = (id) => {
  const sql =  `
    DELETE FROM products 
    WHERE id = $[id]
  `;
  return db.none(sql, { id });
}

module.exports = ProductService;