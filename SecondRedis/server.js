require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8080;
const JsonUrl = 'https://jsonplaceholder.typicode.com/todos/';
let client = require('./init_Redis');
app.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const GetTodo = await client.get(`todo${id}`);

    if (GetTodo) {
      return res
        .status(200)
        .send({ message: 'Redis', GetTodo: JSON.parse(GetTodo) });
    }
    const fetchResult = await axios.get(JsonUrl + id);

    console.log(fetchResult.data, 'here');
    await client.set(`todo${id}`, JSON.stringify(fetchResult.data));
    return res
      .status(200)
      .send({ message: 'Normal Fetched', data: fetchResult.data });
  } catch (er) {
    return res.status(200).send({ message: er.message });
  }
});
app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Home Page' });
});
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
