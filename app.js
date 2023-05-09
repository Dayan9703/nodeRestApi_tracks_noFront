require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morganBady = require('morgan-body')
const loggerStream  = require('./utils/handleLogger')
const app = express()
const dbConnectNoSql = require('./config/mongo')
const {dbConnectMySql} = require('./config/mysql')

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

const ENGINE_DB = process.env.ENGINE_DB

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

if (ENGINE_DB === "mysql") {
    dbConnectMySql();
    return;
  }
  if (ENGINE_DB === "nosql") {
    dbConnectNoSql();
    return;
  }