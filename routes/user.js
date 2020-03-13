const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.index)
router.get('/create', UserController.create)
router.post('/store', UserController.store)
router.get('/:id', UserController.show)
router.get('/:id/edit', UserController.edit)
router.post('/update', UserController.update)
router.post('/:id', UserController.destroy)

module.exports = router
