const express = require('express');
const router = express.Router();
const Location = require('../models/location');

// POST request to save location data
router.post('/', async (req, res) => {
    try {
        const { latitude, longitude } = req.body;

        // Create a new Location document
        const location = new Location({
            latitude,
            longitude
        });

        // Save the location to the database
        await location.save();

        res.status(201).json({ message: 'Location saved successfully' });
    } catch (error) {
        console.error('Error saving location:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
