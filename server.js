require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const healthLogsRouter = require('./routes/healthtracking.routes');
const doctorRouter = require('./routes/doctor.routes');
const volunteerRouter = require('./routes/volunteer.routes');
const appointmentRouter = require('./routes/appointment.routes');
const locationRouter = require('./routes/location.routes');

const HealthLog = require('./models/healthtracking');
const Doctor = require('./models/doctor');
const Volunteer = require('./models/volunteer');
const Appointment = require('./models/appointment');
const Location = require('./models/location');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/healthlogs', healthLogsRouter);
app.use('/api/doctors', doctorRouter);
app.use('/api/volunteers', volunteerRouter);
app.use('/api/appointments', appointmentRouter);
app.use('/api/location', locationRouter);

const mongoString = process.env.MONGODB_URI || 'mongodb://localhost:27017/medlink_db';
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));