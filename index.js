const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

let result = 2021;

setInterval(() => {
  result -= 5;
}, 5000);

app.get('/', (req, res) => {
  res.json({ result: result });
});

exports.api = app;
