const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActiveCartSchema = new Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    isOwner: {
      type: Boolean,
      required: true,
    },
  });

  const UserSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    activeCarts: [ActiveCartSchema],
});

UserSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password; 
        // ret.id = ret._id;    
        // delete ret._id;      
        return ret;          
      }
  });

  UserSchema.methods = {
    login(username) {
        debugger;
        console.log("method this", this);
        return this.findOne({ 'name.firstName': username });  
    },
    getUserById(id) {
        return this.find({ _id: id });
    },
};

const User = mongoose.model('User', UserSchema);

module.exports = User;


