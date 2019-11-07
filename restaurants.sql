DROP DATABASE IF EXISTS restaurants;
CREATE DATABASE restaurants;
\c restaurants;

CREATE TABLE info (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  image TEXT NOT NULL,
  priceRange TEXT NOT NULL,
  categories TEXT NOT NULL
);

CREATE TABLE address (
  address_id INT NOT NULL,
  line1 TEXT NOT NULL,
  milesAway INT NOT NULL,
  FOREIGN KEY (address_id) REFERENCES info(id)
);

CREATE TABLE ratings (
  rating_id INT NOT NULL,
  number INT NOT NULL,
  stars INT NOT NULL,
  good INT NOT NULL,
  timely INT NOT NULL,
  FOREIGN KEY (rating_id) REFERENCES info(id)
);

CREATE TABLE sampleReview (
  sampleReview_id INT NOT NULL,
  name TEXT NOT NULL,
  review TEXT NOT NULL,
  FOREIGN KEY (sampleReview_id) REFERENCES info(id)
);

CREATE TABLE monFri (
  monFri_id INT NOT NULL,
  delivery TEXT NOT NULL,
  pickup TEXT NOT NULL,
  FOREIGN KEY (monFri_id) REFERENCES info(id)
);

CREATE TABLE satSun (
  satSun_id INT NOT NULL,
  delivery TEXT NOT NULL,
  pickup TEXT NOT NULL,
  FOREIGN KEY (satSun_id) REFERENCES info(id)
);