const express = require('express')
const router = express.Router()
const {tokenSing} = require('../utils/handleJwt')
const { encrypt, compare } = require('../utils/handlePassword')
const { usersModel } = require('../models')
const { matchedData } = require('express-validator')
const { validatorLogin, validatorRegister } = require("../validators/auth")

router.post('/register', validatorRegister, async (req, res) => {
    req = matchedData(req)
    const password = await encrypt(req.password)
    const body = { ...req, password }
    const dataUser = await usersModel.create(body)
    dataUser.set('password', undefined, { strict: false })
    
    const data = {
        token: await tokenSing(dataUser),
        user: dataUser
    }

    res.send({ data })
})

module.exports = router