const { route } = require('express/lib/application');

// Add code to create and export an express.Route()
const router = require('express').Router()

// Create first route. Will be used in index.js (GET route that will show a list of all places)
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'public/css/images/emy-XoByiBymX20-unsplash.jpg'
  }, 
  {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'public/css/images/nathan-dumlao-zUNs99PGDg0-unsplash.jpg'
  }]
  // res.render('places/new');
  res.render('places/index', {places});
})

router.post('/', (req,res) => {
  res.send('<h1>some html<h1>');
})

router.get('/new', (req, res) => {
  res.render('places/new');
})

// router.get('/:id', (req,res) => {
//   let myId = req.params.id;
//   res.send('Details for ${myId}');
// })

// router.get('/:id/edit', (req,res) => {
//   let myId = req.params.id;
//   res.send('Edit page for ${myId');
// })

module.exports = router