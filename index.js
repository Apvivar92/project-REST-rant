// Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();

// Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));

// Middleware
// code to import the router in'places.js'
// .use('sets all routes after /places controller,)
app.use('/places', require('./controllers/places'));

// homepage route path
app.get('/', (req, res) => {
  res.render('home') // With .render() it already knows to look for 'views' folder.
});

// make wild card route path. (invalid address)
// (make sure it's place at bottom otherwise page will be override other pages)
app.get('*', (req, res) => {
  // .status(404) linked to .send to call status response
  // .send sends message to page
  res.render('error404')
});

app.listen(process.env.PORT);