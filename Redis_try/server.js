const express = require('express');
const app = express();

app.use(express.json());
let client = require('./init_redis');
app.get('/', async (req, res) => {
  client.set('foo', 'bar');
  let value = await client.get('foo');
  console.log(value);
  res.status(200).send({ message: 'Solved', value });
});

app.listen(8080, () => {
  console.log('listening on http://localhost:8080');
});
