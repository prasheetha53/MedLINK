// controllers/serviceController.js
const Service = require('../models/service');

// Controller actions
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createService = async (req, res) => {
    const service = new Service({
        name: req.body.name,
        description: req.body.description,
        // Add more properties as needed
    });

    try {
        const newService = await service.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Add more controller actions as needed
