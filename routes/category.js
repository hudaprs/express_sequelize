const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/CategoryController')

router.get('/', categoryController.index)
router.get('/create', categoryController.create)
router.post('/store', categoryController.store)
router.get('/:id', categoryController.show)
router.get('/:id/edit', categoryController.edit)
router.post('/update', categoryController.update)
router.post('/destroy', categoryController.destroy)

module.exports = router