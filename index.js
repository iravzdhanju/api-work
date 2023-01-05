const express = require('express');

// Create an instance of the Express app
const app = express();

let result = 2021;

// Set up an interval to update the result every 5 seconds
setInterval(() => {
  result -= 5;
}, 5000);

// Set up a route that listens for GET requests on the root path ('/')
app.get('/', (req, res) => {
  // Send the result as a JSON object in the response
  res.json({ result: result });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
