const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'yalp_photos',
});

connection.connect();

const getPhotos = (id, callback) => {
  const str = `SELECT url FROM photos WHERE restaurant_id=${id}`;
  connection.query(str, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getCaps = (id, callback) => {
  const str = `SELECT caption FROM photos WHERE restaurant_id=${id}`;
  connection.query(str, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { getPhotos, getCaps, connection };
