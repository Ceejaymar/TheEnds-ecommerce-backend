const { db } = require('./dbConnect');
const UserService = {};

UserService.create = (fname, lname, username, email, password, address, city, state, zipcode, seller) => {
  const sql = `
    INSERT INTO
      users (fname, lname, username, email, password, address, city, state, zipcode, seller)
    VALUES
      ($[fname], $[lname], $[username], $[email], $[password], $[address], $[city], $[state], $[zipcode], $[seller])  
    RETURNING id;  
  `;
  return db.one(sql, { fname, lname, username, email, password, address, city, state, zipcode, seller })
}

UserService.read = (id) => {
  const sql = `
    SELECT *
    FROM users
    WHERE
      users.id = $[id]
  `;
  return db.one(sql, { id })
}

UserService.update = (id, fname, lname, username, email, password, address, city, state, zipcode, seller) => {
  const sql = `
    UPDATE users
    SET
      fname = $[fname], 
      lname = $[lname], 
      username = $[username], 
      email = $[email], 
      password = $[password], 
      address = $[address], 
      city = $[city],
      state = $[state], 
      zipcode = $[zipcode], 
      seller = $[seller]
    WHERE 
      users.id = $[id]
  `;
  return db.none(sql, { id, fname, lname, username, email, password, address, city, state, zipcode, seller })
}

//Need to make sure this cascades
UserService.delete = (id) => {
  const sql =  `
    DELETE FROM users WHERE id = $[id]
  `;  
  return db.none(sql, { id });
}

UserService.getUserOrders = (id) => {
  const sql = `
    SELECT
      orders.*
    FROM orders
    JOIN users
      on users.id = orders.customer
    WHERE
      users.id = $[id] 
  `;
  return db.any(sql, { id })
} 

module.exports = UserService;