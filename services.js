// models/service.js
import { Schema, model } from 'mongoose';

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Add more properties as needed
});

export default model('Service', serviceSchema);
