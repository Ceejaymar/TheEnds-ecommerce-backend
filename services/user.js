const { db } = require('./dbConnect');
const UserService = {};

UserService.read = () => {
  const sql =`
    SELECT *
    FROM users
  `;
  return db.any(sql)
}

module.exports = UserService;