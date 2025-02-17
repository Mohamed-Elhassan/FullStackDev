const express = require('express'); //Express app
const router = express.Router(); //Router logic

//This is where we import the contrllers we will route
const tripsController = require('../controllers/trips');

//Define route for out trips endpoint

router
    .route('/trips')
    .get(tripsController.tripsList) //GET method routes tripList
    .post(tripsController.tripsAddTrip);

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;