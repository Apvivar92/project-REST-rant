// Add code to create and export an express.Route()
const router = require('express').Router()

// Create first route. Will be used in index.js (GET route that will show a list of all places)
router.get('/', (req, res) => {
  res.send('GET /places')
})

module.exports = router