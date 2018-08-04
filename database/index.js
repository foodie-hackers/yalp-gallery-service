const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: 'yalp_photos',
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

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

// getPhotos(1, (err, re) => {
//   console.log(res);
// })
module.exports = { getPhotos, getCaps, connection };
