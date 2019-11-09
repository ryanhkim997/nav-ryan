const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/postgresIdx.js');
// const Restaurant = require('../database/models.js');
const PORT = process.env.PORT || 3301;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/restaurants/nav_intro', express.static(path.resolve(__dirname, '../public')));

app.get('/restaurants/', (req, res) => {
  // const { id } = req.params;
  let id = Math.floor(Math.random() * 1000000) + 9000000;
  const query = `SELECT info.*, 
  address.line1, address.milesAway, 
  ratings.number, ratings.stars, ratings.good, ratings.timely, 
  sampleReview.name, sampleReview.review,
  monFri.delivery, monFri.pickup, 
  satSun.delivery, satSun.pickup
  FROM 
  info 
  INNER JOIN address ON info.id = address.address_id 
  INNER JOIN ratings ON info.id = ratings.rating_id 
  INNER JOIN sampleReview ON info.id = sampleReview.sampleReview_id 
  INNER JOIN monFri ON info.id = monFri.monFri_id 
  INNER JOIN satSun ON info.id = satSun.satSun_id 
  WHERE info.id = ${id};`;

  // const query = `SELECT info.*, 
  // address.line1, address.milesAway, 
  // ratings.number, ratings.stars, ratings.good, ratings.timely, 
  // sampleReview.name, sampleReview.review,
  // monFri.delivery, monFri.pickup, 
  // satSun.delivery, satSun.pickup
  // FROM 
  // info
  // WHERE info.id = address.address_id 
  // AND info.id = ratings.rating_id 
  // AND info.id = sampleReview.sampleReview_id 
  // AND info.id = monFri.monFri_id 
  // AND info.id = satSun.satSun_id 
  // AND info.id = ${id};`;
  db.query(query)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => console.error(err));
})

app.listen(PORT, () => console.log('App is listening on PORT', PORT));