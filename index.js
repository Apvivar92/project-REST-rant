require('dotenv').config()
const express = require('express');
const app = express();

// homepage route path
app.get('/', (req, res) => {
  res.send("Hello World")
});

// make wild card route path 
// (make sure it's place at bottom otherwise page will be override other pages)
app.get('*', (req, res) => {
  // .status(404) linked to .send to call status response
  res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)