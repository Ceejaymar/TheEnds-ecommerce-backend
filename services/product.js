const { db } = require('./dbConnect');
const ProductService = {};

ProductService.readAllProducts = () => {
  const sql = `
    SELECT *
    FROM products
  `;
  return db.any(sql);
};

ProductService.read = (id) => {
  const sql = `
    SELECT *
    FROM products
    WHERE
      products.id = $[id]
  `;
  return db.one(sql, { id });
};

ProductService.create = (store_id, name, price, category, description, url, stock) => {
  const sql = `
    INSERT INTO
      products (store_id, name, price, category, description, url, stock)
    VALUES
      ($[store_id], $[name], $[price], $[category], $[description], $[url], $[stock])
    RETURNING id
  `;
  return db.one(sql, { store_id, name, price, category, description, url, stock });
};

ProductService.update = (id, name, price, category, description, url, stock) => {
  const sql = `
    UPDATE
      products
    SET
      name = $[name],
      price = $[price],
      category = $[category],
      description = $[description],
      url = $[url],
      stock = $[stock],
      updatedat = NOW()
    WHERE
      products.id = $[id]
  `;
  return db.none(sql, { id, name, price, category, description, url, stock });
};

ProductService.delete = (id) => {
  const sql = `
    DELETE FROM
      products
    WHERE
      id = $[id]
  `;
  return db.none(sql, { id });
};

module.exports = ProductService;
