const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/', ProductController.index)
router.get('/create', ProductController.create)
router.post('/store', ProductController.store)
router.get('/:id', ProductController.show)
router.get('/:id/edit', ProductController.edit)
router.post('/update', ProductController.update)
router.post('/destroy', ProductController.destroy)

module.exports = router;