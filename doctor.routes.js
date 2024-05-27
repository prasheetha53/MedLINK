// routes/doctors.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');

router.get('/', doctorController.getAllDoctors);
router.post('/', doctorController.createDoctor);

module.exports = router;

