const mongoose = require('mongoose');
const {createModel} = require('../models/utils');

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    imageUrls: [String],
    price: { type: Number, required: true },
});

const Item = createModel('Item', itemSchema);

module.exports = Item;
