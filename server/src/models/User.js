const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
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
  activeCarts: [{
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
    isOwner: { type: Boolean, default: false }
  }]
});

UserSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password; 
        // ret.id = ret._id;    
        // delete ret._id;      
        return ret;          
      }
  });

  UserSchema.statics = {
    login(username) {
        return this.findOne({ 'name.firstName': username });  
    },
  };

const User = mongoose.model('User', UserSchema);

module.exports = User;


