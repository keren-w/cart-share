const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    '_id': { type: mongoose.Schema.Types.ObjectId },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    activeCarts: [{
        '_id': { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
        isOwner: { type: Boolean, default: false }
    }],
}.toJSON);

userSchema.methods = {
    toJSON() {
        const user = this.toObject();
        delete user.password;
        return user;
    },
    login(username) {
        return this.findOne({ username });
    },
    getUserById(id) {
        return this.find({ _id: id });
    },
};

const User = mongoose.model('User', userSchema);

module.exports = User;


