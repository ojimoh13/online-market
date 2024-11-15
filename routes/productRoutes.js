const express = require('express');
const router = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');

router.post('/products', createProduct);     // Create
router.get('/products', getProducts);        // Read
router.put('/products/:id', updateProduct);  // Update
router.delete('/products/:id', deleteProduct); // Delete

module.exports = router;
