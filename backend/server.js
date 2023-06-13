require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true} )
const db = mongoose.connection

db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database Connected'))

app.use(express.json())

app.listen(3001, () => console.log('server started at 3001 port'))

