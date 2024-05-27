// controllers/appointmentController.js
const Appointment = require('../models/appointment');
const Doctor = require('../models/doctor');
const Volunteer = require('../models/volunteer');

exports.createAppointment = async (req, res) => {
    const { entityId, entityType, date, time } = req.body;

    let availabilityCheck;
    if (entityType === 'doctor') {
        availabilityCheck = await Doctor.findOne({
            _id: entityId,
            'availability.dayOfWeek': date.getDay(), // Assuming date is a Date object
            'availability.startTime': { $lte: time }, // Check if appointment time is after or equal to entity's start time
            'availability.endTime': { $gte: time } // Check if appointment time is before or equal to entity's end time
        });
    } else if (entityType === 'volunteer') {
        availabilityCheck = await Volunteer.findOne({
            _id: entityId,
            'availability.dayOfWeek': date.getDay(), // Assuming date is a Date object
            'availability.startTime': { $lte: time }, // Check if appointment time is after or equal to entity's start time
            'availability.endTime': { $gte: time } // Check if appointment time is before or equal to entity's end time
        });
    }

    if (!availabilityCheck) {
        return res.status(400).json({ message: `${entityType.charAt(0).toUpperCase() + entityType.slice(1)} is not available at the specified time.` });
    }

    const appointment = new Appointment({
        entityId,
        entityType,
        date,
        time,
        // Add more properties as needed
    });

    try {
        const newAppointment = await appointment.save();
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
