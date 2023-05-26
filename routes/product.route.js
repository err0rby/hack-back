const { Router } = require('express');
const router = Router();
const { productController } = require('../controllers/product.controller');

router.get('/product', productController.getProduct);
router.post('/addProd', productController.addProduct);
router.delete('/deleteProd', productController.deleteProduct);
router.patch('/patchProd', productController.updateProduct);

module.exports = router;