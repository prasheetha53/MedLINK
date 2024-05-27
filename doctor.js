// models/doctor.js
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

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    availability: [availabilitySchema]
});

module.exports = mongoose.model('Doctor', doctorSchema);
