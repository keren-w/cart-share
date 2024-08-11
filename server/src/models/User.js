const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    '_id': { type: mongoose.Schema.Types.ObjectId},
    name: { 
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
     },
    activeCarts: [{
        '_id': { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
        isOwner: { type: Boolean, default: false }
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
