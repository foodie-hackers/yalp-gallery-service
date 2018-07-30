const db = require('../database/index.js');

afterAll(() => db.connection.end());

test('should have 100 restaurants in database', (done) => {
  const callback = (error, data) => {
    expect(data.length).toBe(100);
    done();
  };

  db.connection.query('SELECT name FROM restaurants', (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
});

test('should return 5 photo urls for restaurant 1', (done) => {
  const callback = (error, data) => {
    expect(typeof data[0].url).toBe('string');
    expect(data.length).toBe(5);
    done();
  };

  db.getPhotos(1, (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
});

test('should return 5 caption strings for restaurant 1', (done) => {
  const callback = (error, data) => {
    expect(typeof data[0].caption).toBe('string');
    expect(data.length).toBe(5);
    done();
  };

  db.getCaps(1, (error, results) => {
    if (error) {
      throw error;
    } else {
      callback(null, results);
    }
  });
});
