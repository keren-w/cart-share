const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    '_id': { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    imageUrls: [String],
    price: { type: Number, required: true },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
