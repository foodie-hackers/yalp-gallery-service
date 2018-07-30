const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const server = express();

server.use(express.static('public'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/restaurants/:id/photos', (req, res) => {
  db.getPhotos(req.params.id, (err1, photo) => {
    if (err1) {
      console.log(err1);
    } else {
      db.getCaps(req.params.id, (err2, caption) => {
        if (err2) {
          console.log(err2);
        } else {
          console.log('hi');
          res.send({ photo, caption });
        }
      });
    }
  });
});

if (process.env.NODE_ENV !== 'test') {
  server.listen(3002, () => console.log('listening on 3002'));
}

// server.listen(3002, () => console.log('listening on 3002!!'));
