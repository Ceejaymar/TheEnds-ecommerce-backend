const { db } = './dbConnect.js';
const StoreService = {};

StoreService.read = (id) => {
  const sql = `
    SELECT *
    FROM stores
  `;
  return db.any(sql);
}

