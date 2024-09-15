const mongoose = require('mongoose');
const { createModel } = require('../models/utils');

const cartSchema = new mongoose.Schema({
    items: [{
        addedBy: [String],
        insertTime: { type: Date, default: Date.now },
        updateTime: { type: Date, default: Date.now }
    }],
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    following: [mongoose.Schema.Types.ObjectId],
});

  cartSchema.statics = {
    getCartMetadata: () => ({
          _id: 1,
          items: 1
      })
  }

const Cart = createModel('Cart', cartSchema);

module.exports = Cart;
