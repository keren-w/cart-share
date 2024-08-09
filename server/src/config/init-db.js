const mongoose = require('mongoose');
const User = require('../models/User');
const mockUsers = require('../data/users');

const initializeDB = async ()  => {

  // Drop existing users collection if you want a fresh start
  await mongoose.connection.db.dropCollection('users').catch(err => console.log('No collection to drop'));

  // Insert sample data
  await User.create(mockUsers.users);

  console.log('Database initialized with sample data');
}

module.exports = initializeDB;