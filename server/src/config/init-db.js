const mongoose = require('mongoose');
const User = require('../models/User');

const initializeDB = async ()  => {

  // Drop existing users collection if you want a fresh start
  await mongoose.connection.db.dropCollection('users').catch(err => console.log('No collection to drop'));

  // Insert sample data
  await User.create([
    { name: 'John Doe', email: 'john@example.com', password: '123456' },
    { name: 'Jane Doe', email: 'jane@example.com', password: 'abcdef' }
  ]);

  console.log('Database initialized with sample data');
}

module.exports = initializeDB;