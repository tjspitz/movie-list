// import mysql2
const mysql = require('mysql2');

// assign to a var
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movielist'
});

// start up the connection to the database
db.connect()

// export it for use elsewhere
module.exports = db;

// ===== MONGO ITERATION =====
