DROP DATABASE IF EXISTS restaurants_one;
CREATE DATABASE restaurants_one;
\c restaurants_one;

CREATE TABLE info (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  image TEXT NOT NULL,
  priceRange INT NOT NULL,
  categories TEXT NOT NULL,
  line1 TEXT NOT NULL,
  line2 TEXT NOT NULL,
  milesAway DECIMAL NOT NULL,
  number INT NOT NULL,
  stars INT NOT NULL,
  good INT NOT NULL,
  timely INT NOT NULL,
  sampleRevName TEXT NOT NULL,
  review TEXT NOT NULL,
  monFriDelivery TEXT NOT NULL,
  monFriPickup TEXT NOT NULL,
  satSunDelivery TEXT NOT NULL,
  satSunPickup TEXT NOT NULL
);