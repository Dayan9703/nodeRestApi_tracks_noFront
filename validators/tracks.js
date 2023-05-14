const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator')

const validatorCreateItem = [
    check('name').exists().notEmpty(),
    check('album').exists().notEmpty(),
    check('mediaId').exists().notEmpty(),
    check('password').exists().notEmpty(),
    check('role').exists().notEmpty(),

    
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreateItem, validatorGetItem };