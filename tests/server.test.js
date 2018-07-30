const request = require('supertest');
const server = require('../server/index.js');

describe('Server tests', () => {
  test('should respond to GET request with status code 200', (done) => {
    request(server.server).get('/restaurants/1/photos').expect(200);
    done();
  });
});

describe('Server tests', () => {
  test('GET request should respond with correct object', (done) => {
    request(server.server).get('/restaurants/1/photos').then((res) => {
      expect(Object.keys(res.body).length).toBe(2);
      expect(res.body.photo.length).toBe(5);
      done();
    });
  });
});
