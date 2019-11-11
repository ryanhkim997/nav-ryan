const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const Restaurant = require('../database/models.js');
const PORT = process.env.PORT || 3300;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/restaurants/nav_intro', express.static(path.resolve(__dirname, '../public')));

app.get('/api/restaurants/:id', function(req, res) {
  let { id } = req.params;
  // id <= 5000000 
  // ?
  Restaurant.find({ id })
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    res.status(404).send('Could not complete get request: ', err);
  })
  // :
  // Restaurant.find({ id }).sort({ id: -1 })
  // .then((result) => {
  //   res.status(200).send(result);
  // })
  // .catch((err) => {
  //   res.status(404).send('Could not complete get request: ', err);
  // })
});

app.get('/api/restaurant', function(req, res) {
  // let { name } = req.query;
  let id = Math.floor(Math.random() * 1000000) + 9000000;
  
  // Restaurant.find({ name }).where({ id: { $gte: 9000000, $lte: 10000000 } }).limit(1)
  Restaurant.findOne({ id })
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    res.status(404).send('Could not complete get request: ', err);
  })
});

// NOTE: The below has no UI support but is in place for basic requirements.
app.post('/restaurants', function(req, res) {
  let { name, address, phone, schedule, image, priceRange } = req.body;
  let id;
  let ratings = {
    number: 0, 
    stars: 0, 
    good: 0, 
    timely: 0, 
    correct: 0,
    sampleReview: {
      name: "",
      review: ""
    }
  };
  let categories = [];
  Restaurant.countDocuments({})
  .then((count) => {
    id = count + 1;
    address.milesAway = 0;
    let data = { name, address, phone, schedule, image, priceRange, id, ratings, categories };
    Restaurant.create(data)
    .then(() => res.status(201).send('Successful post.'))
    .catch((err) => res.status(404).send('Could not post: ', err));
  })
  .catch((err) => console.log('Could not count DB: ', err));
});



app.listen(PORT, () => console.log('App is listening on PORT', PORT));

