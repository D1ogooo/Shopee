const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

async function conn() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopeeteste');

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

module.exports = conn;