// routes/volunteers.js
const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteer.controller');

router.get('/', volunteerController.getAllVolunteers);
router.post('/', volunteerController.createVolunteer);

module.exports = router;
