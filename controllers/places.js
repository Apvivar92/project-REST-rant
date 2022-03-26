const { route } = require('express/lib/application');

// Add code to create and export an express.Route()
const router = require('express').Router()
const places = require('../models/places.js')

// Create first route. Will be used in index.js (GET route that will show a list of all places)
router.get('/', (req, res) => {
  res.render('places/index', {places});
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'// Default image if one is not provided
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.send('POST /places')
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