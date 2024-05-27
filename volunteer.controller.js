// controllers/volunteerController.js
const Volunteer = require('../models/volunteer');

exports.getAllVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.json(volunteers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createVolunteer = async (req, res) => {
    const volunteer = new Volunteer({
        name: req.body.name,
        address: req.body.address,
        typeOfHelp: req.body.typeOfHelp,
        availability: req.body.availability
    });

    try {
        const newVolunteer = await volunteer.save();
        res.status(201).json(newVolunteer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Add more controller actions as needed
