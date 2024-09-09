const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    '_id': { type: mongoose.Schema.Types.ObjectId },
    items: [{
        '_id': { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
        addedBy: [String],
        insertTime: { type: Date, default: Date.now },
        updateTime: { type: Date, default: Date.now }
    }],
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    following: [mongoose.Schema.Types.ObjectId],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
