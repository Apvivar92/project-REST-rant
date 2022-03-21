
require('dotenv').config()
const express = require('express');
const app = express();

// code to import the router in'places.js'
// .use('sets all routes after /places controller,)
app.use('/places', require('./controllers/places'))

// homepage route path
app.get('/', (req, res) => {
  res.send("Homepage")
});

// make wild card route path. (invalid address)
// (make sure it's place at bottom otherwise page will be override other pages)
app.get('*', (req, res) => {
  // .status(404) linked to .send to call status response
  // .send sends message to page
  res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)