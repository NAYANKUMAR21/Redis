const express = require('express');
const { fetchDataFromDatabase, insertDataIntoTable } = require('./sql_setup');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', fetchDataFromDatabase);
app.post('/post-todo', insertDataIntoTable);
app.listen(8080, () => {
  console.log('Port running On 8080 ');
});
