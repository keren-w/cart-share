const mongoose = require('mongoose');
const initializeDB = require('./init-db');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
    await initializeDB();
    console.log('Database initialized with sample data');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;