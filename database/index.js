const mysql = require('mysql');

const connection = mysql.connection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'yalp_photos',
});

connection.connect();
