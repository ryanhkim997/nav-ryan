const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'ryan',
  database: 'restaurants',
  max: 20,
//   idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    // release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
    console.log('Connected to detebes :3');
  })
})

module.exports = pool;