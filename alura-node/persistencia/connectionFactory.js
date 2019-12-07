const mysql = require('mysql');

function createMysqlConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'payfast'
  });
}

module.exports = () => { return createMysqlConnection };