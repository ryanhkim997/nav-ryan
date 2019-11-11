var mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/grubhub', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost/restaurants', {useNewUrlParser: true, poolSize: 20})
// mongoose.connect('mongodb://ec2-13-56-246-19.us-west-1.compute.amazonaws.com/restaurants', {useNewUrlParser: true, poolSize: 20})
// mongoose.connect('mongodb://13.56.246.19/restaurants', {useNewUrlParser: true, poolSize: 20})
// mongoose.connect(`mongodb+srv://kjhogan:${process.env.DB_PASSWORD}@cluster0-hvkil.mongodb.net/test?retryWrites=true`, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

const db = mongoose.connection;
db.on('error', (err) => console.log('Could not connect to database: ', err));
db.once('open', () => console.log('Connected to database! :D'));

module.exports = db;