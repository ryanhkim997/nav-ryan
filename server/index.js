const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const Restaurant = require('../database/models.js');
const PORT = 3300;
const app = express();

app.use('/restaurants/:id', express.static(path.resolve(__dirname, '../public')));

app.get('/restaurants/:id/info', function(req, res) {
  let { id } = req.params;
  Restaurant.find({ id })
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    res.status(404).send('Could not complete get request: ', err);
  })
});

app.listen(PORT, () => console.log('App is listening on PORT', PORT));

