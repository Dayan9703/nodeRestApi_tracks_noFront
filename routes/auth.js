const express = require('express')
const router = express.Router()
const { loginCtrl } = require('../controllers/auth')
const { validatorLogin, validatorRegister } = require("../validators/auth")

router.post('/register', validatorRegister, loginCtrl)

module.exports = router