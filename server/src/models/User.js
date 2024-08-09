const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    '_id': { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    activeCarts: [{
        '_id': { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
        isOwner: { type: Boolean, default: false }
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
