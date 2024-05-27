const HealthLog = require('../models/healthtracking');

exports.createHealthLog = async (req, res) => {
    const healthLog = new HealthLog({
        userId: req.body.userId,
        weight: req.body.weight,
        height: req.body.height,
        bloodPressureSystolic: req.body.bloodPressureSystolic,
        bloodPressureDiastolic: req.body.bloodPressureDiastolic,
        bloodSugar: req.body.bloodSugar,
        heartRate: req.body.heartRate,
        exerciseHours: req.body.exerciseHours,
        sleepData: req.body.sleepData,
        allergies: req.body.allergies,
        chronicConditions: req.body.chronicConditions,
        surgicalHistory: req.body.surgicalHistory,
        medicationsList: req.body.medicationsList,
        bodyFat: req.body.bodyFat,
        muscleMass: req.body.muscleMass
    });

    try {
        const newHealthLog = await healthLog.save();
        res.status(201).json(newHealthLog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getHealthLogsByUser = async (req, res) => {
    try {
        const healthLogs = await HealthLog.find({ userId: req.params.userId });
        res.json(healthLogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getHealthLogDataForVisualization = async (req, res) => {
    try {
        const healthLogs = await HealthLog.find({ userId: req.params.userId }).select('date weight bloodPressureSystolic bloodPressureDiastolic bloodSugar');
        res.json(healthLogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
