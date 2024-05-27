// models/healthLog.js
const mongoose = require('mongoose');

const healthLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    weight: Number,
    height: Number,
    bloodPressureSystolic: Number,
    bloodPressureDiastolic: Number,
    bloodSugar: Number,
    heartRate: Number,
    exerciseHours: Number,
    sleepData: Number,
    allergies: String,
    chronicConditions: String,
    surgicalHistory: String,
    medicationsList: String,
    bodyFat: Number,
    muscleMass: Number
});

module.exports = mongoose.model('HealthLog', healthLogSchema);
