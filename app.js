if(process.env.NODE_ENV === 'development')
{
    require('dotenv').config()
}

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(require('cors')())
app.use(require('morgan')('combined'))

app.use(require('./router'))


module.exports = app