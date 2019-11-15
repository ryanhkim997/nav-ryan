const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'ryan',
  database: 'restaurants_one',
  max: 10,
  // idleTimeoutMillis: 3000,
  // connectionTimeoutMillis: 2000,
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  // client.query('SELECT NOW()', (err, result) => {
  //   // release()
  //   if (err) {
  //     return console.error('Error executing query', err.stack)
  //   }
  //   console.log(result.rows)
  // })
  console.log('Connected to detebes :3');
})

// const client = new Client({
//   host: 'localhost',
//   user: 'ryan',
//   database: 'restaurants'
// })
// client.connect((err) => {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log('Connected to the detetetetetetebes >:)');
//   }
// })


module.exports = pool;
// module.exports = client;