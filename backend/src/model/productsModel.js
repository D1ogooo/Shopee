const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  valor: {
    type: String,
    required: true,
  },
  indicado: {
    type: Boolean,
    default: false
  },
  quantity: {
    type: String,
  },
  
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
