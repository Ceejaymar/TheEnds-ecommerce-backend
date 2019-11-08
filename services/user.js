const { db } = require('./dbConnect');
const UserService = {};

// Todo: Should return store name is owns one.
UserService.readAll = () => {
  const sql = `
    SELECT *
    FROM users
  `;
  return db.any(sql);
};

UserService.create = (fname, lname, email, uid, address, city, state, zipcode, seller) => {
  const sql = `
    INSERT INTO
      users (fname, lname, email, uid, address, city, state, zipcode, seller)
    VALUES
      ($[fname], $[lname], $[email], $[uid], $[address], $[city], $[state], $[zipcode], $[seller])
    RETURNING id;
  `;
  return db.one(sql, { fname, lname, email, uid, address, city, state, zipcode, seller });
};

UserService.read = (id) => {
  const sql = `
    SELECT *
    FROM
      users
    WHERE
      users.id = $[id]
  `;
  return db.one(sql, { id });
};

UserService.update = (id, fname, lname, username, email, password, address, city, state, zipcode, seller) => {
  const sql = `
    UPDATE
      users
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
      seller = $[seller],
      updatedat = NOW()
    WHERE
      users.id = $[id]
  `;
  return db.none(sql, { id, fname, lname, username, email, password, address, city, state, zipcode, seller });
};

UserService.delete = (id) => {
  const sql = `
    DELETE FROM
      users
    WHERE
      id = $[id]
  `;
  return db.none(sql, { id });
};

UserService.getUserOrders = (id) => {
  const sql = `
    SELECT
      orders.*
    FROM orders
    JOIN users
      ON users.id = orders.customer
    WHERE
      users.id = $[id]
  `;
  return db.any(sql, { id });
};

module.exports = UserService;
