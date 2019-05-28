var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grubhub', {useNewUrlParser: true});
// mongoose.connect('mongodb+srv://kjhogan:kjhogan@cluster0-hvkil.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', (err) => console.log('Could not connect to database: ', err));
db.once('open', () => console.log('Connected to database! :D'));

module.exports = db;