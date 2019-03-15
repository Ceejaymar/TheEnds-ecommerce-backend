const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/theends');

module.exports = {
  db 
};