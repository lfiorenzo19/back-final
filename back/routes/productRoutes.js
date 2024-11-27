const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

// Rutas para los productos
router.get('/',productController.getProducts);
router.get('/:id',productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id',productController.deleteProduct);


module.exports = router;