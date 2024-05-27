// models/volunteer.js
const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
    dayOfWeek: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }
});

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    typeOfHelp: {
        type: String,
        required: true
    },
    availability: [availabilitySchema]
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
