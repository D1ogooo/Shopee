const jwt = require('jsonwebtoken');
require('dotenv').config();
const Product = require("../model/productsModel");

class ProductsController {

  async create(req, res) {
    const { image, titulo, conteudo, valor } = req.body;

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Não autorizado' });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const newProduct = new Product({
      image,
      titulo,
      conteudo,
      valor,
      user: decoded.id
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  }

  async delete(req, res) {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "Produto deletado" });
  }

  async show(req, res) {
    const products = await Product.find();
    res.status(200).json(products);
  }

  async find(req, res) {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    res.status(200).json(product);
  }
}

module.exports = new ProductsController();