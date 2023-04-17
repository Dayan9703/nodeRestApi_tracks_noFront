const bcrypt = require('bcrypt')

const encrypt = async (passwordPlain, )=>{
    return hash = await bcrypt.hash(passwordPlain, 10)
}

const compare = async (passwordPlain, hashPassword)=>{
    return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = {encrypt, compare}