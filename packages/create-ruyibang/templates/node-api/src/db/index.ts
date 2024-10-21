import mysql from 'mysql2';

// Create the connection pool
const pool = mysql
  .createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_database',
  })
  .promise();

export default pool;
