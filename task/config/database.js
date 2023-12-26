// import mysql
const mysql = require("mysql");

// import dotenv dan jalankan method config
require("dotenv").config();

// destructing object process.env
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// update konfigurasi database dari file .env
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

/**
 * Connect ke database menggunakan method connect.
 * Menerima parameter callback
 */
db.connect((err) => {
  if (err) {
    console.log("Error connecting " + err.stack);
    return;
  } else {
    console.log("Connected to database");
    return;
  }
});
// config/database.js
module.exports = {
    connection: {
        host: 'localhost',
        user: 'root',
        password: '', 
        database: 'students_api',
        charset: 'utf8mb4'
    }
};

module.exports = db;