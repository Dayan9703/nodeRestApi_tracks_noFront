const express = require('express')
const router = express.Router()
const { loginCtrl, registerCtrl } = require('../controllers/auth')
const { validatorLogin, validatorRegister } = require("../validators/auth")

router.post('/register', validatorRegister, registerCtrl)

router.post('/login', validatorLogin, loginCtrl)

module.exports = router