const jwt = require('jsonwebtoken')
require('dotenv').config();
const Product = require("../model/productsModel");

class ProductsController {
    create() {
     const { image, titulo, conteudo, valor } = req.body

      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      const secret = process.env.SECRET_KEY;

     if (!token) {
      return res.status(401).json({ message: 'Não autorizado' });
     }

     const decoded = jwt.verify(token, secret);
     const userId = decoded.id;

     if (!token) {
      return res.status(401).json({ message: 'Não autorizado' });
     }
     
     const newProduct = new Product({
        image,
        titulo,
        conteudo,
        valor,
        user: userId
     })
     
     res.status(201).json({ "sucesso!": newProduct });
    }

    delete() {

    }

    show() {
     
    }

    find() {
     const { id } = req.params;
     
     const verifyProduct = Product.findOne({ id })

     if(!verifyProduct) {
      res.status(400).json({ "falha": "Produto não encontrado"});
     }

     const showProducts = Product.find({ id })
     res.status(200).json({ "sucesso": "Produto na mão"})
    }
}

module.exports = new ProductsController()