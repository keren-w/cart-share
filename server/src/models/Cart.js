const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items: [{
        addedBy: [String],
        insertTime: { type: Date, default: Date.now },
        updateTime: { type: Date, default: Date.now }
    }],
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    following: [mongoose.Schema.Types.ObjectId],
});

cartSchema.set('toJSON', {
    transform: function(doc, ret) {
        ret.id = ret._id;    
        delete ret._id;      
        return ret;          
      }
  });

  cartSchema.statics = {
    getCartMetadata: () => ({
          _id: 1,
          items: 1
      })
  }

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
