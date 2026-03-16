const express = require('express')
const router = express.Router();


router.post('/users/signin', authController.signin);
router.post('/users/signup', authController.signup);

router.post('/users/create', authController.create);
router.delete('/products/delete/:id', authController.delete)
router.get('/products/show', authController.show);
router.get('/products/find/:id', authController.find);

module.exports = router