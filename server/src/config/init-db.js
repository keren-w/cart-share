const mongoose = require('mongoose');
const User = require('../models/User');
const Item = require('../models/Item');
const Cart = require('../models/Cart');
const mockUsers = require('../data/users');
const mockItems = require('../data/items');
const mockCarts = require('../data/carts');

const initializeDB = async ()  => {

  // Drop existing users collection if you want a fresh start
  await mongoose.connection.db.dropCollection('users').catch(err => console.log('No collection to drop'));
  await mongoose.connection.db.dropCollection('items').catch(err => console.log('No collection to drop'));
  await mongoose.connection.db.dropCollection('carts').catch(err => console.log('No collection to drop'));

  // Insert sample data

  await User.create(mockUsers.users);
  console.log('Users collection initialized');
  await Item.create(mockItems.items);
  console.log('Items collection initialized');
  await Cart.create(mockCarts.carts);
  console.log('Carts collection initialized');
}

module.exports = initializeDB;