const express = require('express');

const server = express();


server.use(express.static('public'));

server.listen(3002, () => console.log('listening on 3002!!'));
