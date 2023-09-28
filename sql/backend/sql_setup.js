const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'nayankumar',
  database: 'NAYAN',
  connectionLimit: 10,
});

async function fetchDataFromDatabase(req, res) {
  // Get a connection from the pool
  let ans = [];
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
      return;
    }

    // Your SQL query to fetch data
    const query = 'SELECT * FROM users;';

    // Execute the query
    connection.query(query, (error, results, fields) => {
      // Release the connection back to the pool
      connection.release();

      if (error) {
        console.error('Error executing the query: ', error);
        return;
      }

      // Process the results (if needed)
      console.log('Fetched data from here: ', results);
      // Do something with the data here...
      return res.status(200).send(results);
    });
  });
}
function insertDataIntoTable(req, res) {
  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
      return;
    }

    // Your SQL query to insert data
    const query = 'INSERT INTO users (name, age, LastName) VALUES (?, ?, ?);';
    const values = [req.body.name, req.body.age, req.body.LastName]; // Replace with your actual values

    // Execute the query with the provided values
    connection.query(query, values, (error, results) => {
      // Release the connection back to the pool
      connection.release();

      if (error) {
        console.error('Error executing the query: ', error);
        return;
      }

      console.log(
        'Data inserted successfully. Affected rows:',
        results.affectedRows,
        results
      );
    });
  });
}
// Call the function to fetch data
module.exports = { fetchDataFromDatabase, insertDataIntoTable };
