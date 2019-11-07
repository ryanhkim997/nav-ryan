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

app.get('/restaurants/:id', (req, res) => {
  const { id } = req.params;

  
})

app.listen(PORT, () => console.log('App is listening on PORT', PORT));

