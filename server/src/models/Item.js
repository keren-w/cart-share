const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    imageUrls: [String],
    price: { type: Number, required: true },
});

itemSchema.set('toJSON', {
    transform: function(doc, ret) {
        ret.id = ret._id;    
        delete ret._id;      
        return ret;          
      }
  });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
