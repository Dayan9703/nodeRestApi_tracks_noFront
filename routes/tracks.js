const express = require('express')
const { getItem, createItem } = require('../controllers/tracks')
const router = express.Router()
const { getItems } = require('../controllers/tracks')

router.get('/', getItems)
router.post('/', createItem)

module.exports = router