// controllers/doctorController.js
const Doctor = require('../models/doctor');

exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createDoctor = async (req, res) => {
    const doctor = new Doctor({
        name: req.body.name,
        specialization: req.body.specialization,
        availability: req.body.availability
    });

    try {
        const newDoctor = await doctor.save();
        res.status(201).json(newDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Add more controller actions as needed
