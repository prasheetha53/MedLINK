const express = require('express');
const router = express.Router();
const healthLogController = require('../controllers/healthtracking.controller');

router.post('/', healthLogController.createHealthLog);
router.get('/user/:userId', healthLogController.getHealthLogsByUser);
router.get('/user/:userId/visualization', healthLogController.getHealthLogDataForVisualization);

module.exports = router;
