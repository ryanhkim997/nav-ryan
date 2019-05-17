const express = require('express');
const path = require('path');
const PORT = 3300;
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(PORT, () => console.log('App is listening on PORT', PORT));

