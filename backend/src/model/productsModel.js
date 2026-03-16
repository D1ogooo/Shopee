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
  conteudo: {
    type: String,
    required: true,
  },
  valor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
