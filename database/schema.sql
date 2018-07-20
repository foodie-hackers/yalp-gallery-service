DROP DATABASE IF EXISTS yalp_photos;

CREATE DATABASE yalp_photos;

USE yalp_photos;

CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  restaurant_id int NOT NULL,
  url varchar(50) NOT NULL,
  caption varchar(255) NOT NULL,
  FOREIGN KEY (restaurant_id)
);
