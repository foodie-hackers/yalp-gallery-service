const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const server = express();
const port = process.env.PORT || 3002;

server.use('/:id/', express.static('public'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.get('/restaurants/:id/photos', (req, res) => {
  db.getPhotos(req.params.id, (err1, photo) => {
    if (err1) {
      console.log(err1);
    } else {
      db.getCaps(req.params.id, (err2, caption) => {
        if (err2) {
          console.log(err2);
        } else {
          res.send({ photo, caption });
        }
      });
    }
  });
});

server.use('/*', (req, res) => {
  res.sendFile(`${__dirname.substring(0, __dirname.length-7)}/public/index.html`);
});

if (process.env.NODE_ENV !== 'test') {
  server.listen(port, () => console.log('listening on 3002'));
}

module.exports = { server };
