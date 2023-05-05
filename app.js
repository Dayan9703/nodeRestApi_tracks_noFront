require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morganBady = require('morgan-body')
const loggerStream  = require('./utils/handleLogger')
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

morganBady(app, {
    noColors: true,
    stream: loggerStream,
    skip: function(req,res){
        return res.statusCode < 399
    }
})

const port = process.env.PORT || 3000

app.use('/api', require('./routes'))


app.listen(port, () => {
    console.log('Tu app esta lista por http://localhost:' + port)
})

dbConnect()