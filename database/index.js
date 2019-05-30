var mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/grubhub', {useNewUrlParser: true});
mongoose.connect(`mongodb+srv://kjhogan:${process.env.DB_PASSWORD}@cluster0-hvkil.mongodb.net/test?retryWrites=true`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', (err) => console.log('Could not connect to database: ', err));
db.once('open', () => console.log('Connected to database! :D'));

module.exports = db;