const mongoose = require('mongoose');

const { createModel } = require('../models/utils');

const userSchema = new mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
  },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  location: {
    city: { type: String, required: true },
    state: { type: String },
    country: { type: String, required: true }
  },
  profession: {
    jobTitle: { type: String },
    company: { type: String }
  },
  socialMedia: {
    facebook: { type: String }
  },
  avatarUrl: { type: String },
});

  userSchema.statics = {
    login(username) {
      return this.findOne({ 'name.firstName': username }).select('name avatarUrl');  
    },
    getUserProfileData(userId) {
        return this.findById(userId).select('name email location');
    }
  };

const User = createModel('User', userSchema);

module.exports = User;


