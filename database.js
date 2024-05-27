const mongoose = require('mongoose');

const MONGODB_URI = mongodb+srv://prasheethaj:prashi@0503@cluster0.mqxwoqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;

mongoose.connect(MONGODB_URI).then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.log('Error connecting to MongoDB:', err);
});

