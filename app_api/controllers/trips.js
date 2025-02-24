const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome tesponse must include HTML status code
// and JSON message to the requesting client

const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

    console.log(q);

    if(!q) {
        return res
                .status(404)
                .json(err);
    } else {
        return res
            .status(200)
            .json(q);
        }
    };

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome response must include HTML status code
// and JSON message to the requesting client

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();

        console.log(q);

    if(!q)
        {
            return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// POST: /trips - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client

const tripsAddTrip = async (req, res) => {
getUser(req, res, async (req, res) => {
    // Build a new Trip instance with data from the request body
    const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description,
    });

    try {
      // Save the new trip to the database
    const q = await newTrip.save();
    if (!q) {
        // Database returned no data
        return res.status(400).json({ error: "Database returned no data" });
    }
      // Log and return the newly created trip
    console.log(q);
    return res.status(201).json(q);
    } catch (err) {
      // Handle any errors that occur during the save operation
    return res.status(400).json(err);
    }
});
};
  // PUT: /trips/:tripCode - Updates a Trip
  // Regardless of outcome, response must include HTML status code
  // and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
    getUser(req, res, (req, res) => {
    Trip.findOneAndUpdate(
        { 'code': req.params.tripCode },
        {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
        },
        { new: true }
    )
        .then(trip => {
        if (!trip) {
            return res.status(404).send({
            message: "Trip not found with code " + req.params.tripCode
            });
        }
        res.send(trip);
        })
        .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
            message: "Trip not found with code " + req.params.tripCode
            });
        }
        return res.status(500).json(err);
        });
    });
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};