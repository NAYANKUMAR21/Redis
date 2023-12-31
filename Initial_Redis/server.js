require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
//middleware
app.use(express.json());
app.use(cors());
//routes
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
