const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  type: { type: String, required: true, maxlength: 50 },
  sku: { type: String, required: true, maxlength: 50 },
  image_url: { type: String, required: true },
  description: { type: String, required: true, maxlength: 500 },
  quantity: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);
