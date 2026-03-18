const express = require('express');
const authController = require('../controllers/authController');
const ProductsController = require('../controllers/products');
const  AuthMiddlare  = require('../middlewares/authMiddlare');
const router = express.Router();

router.post('/users/signin', authController.signin);
router.post('/users/signup', authController.signup);

router.post('/products/create', AuthMiddlare, ProductsController.create);
router.delete('/products/delete/:id', AuthMiddlare, ProductsController.delete)
router.get('/products/show', AuthMiddlare, ProductsController.show);
router.get('/products/find/:id', AuthMiddlare, ProductsController.find);

module.exports = router