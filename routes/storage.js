const express = require('express');
const { createItem, getItem, getItems, updateItem, deleteItem } = require('../controllers/storage');
const router = express.Router()
const {validatorGetItem} = require('../validators/storage')
const {uploadMiddleware} = require('../utils/handleStorage')

router.get('/',getItems)
router.get('/:id',validatorGetItem ,getItem)
router.delete('/:id',validatorGetItem ,deleteItem)

router.post('/', uploadMiddleware.single('myfile'), createItem)

module.exports = router;