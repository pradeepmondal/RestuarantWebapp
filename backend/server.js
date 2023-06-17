require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true} )
const db = mongoose.connection

db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database Connected'))

app.use(express.json())
app.use(cors())

const api = require('./routes/api')

app.use('/api', api)

app.listen(3001, () => console.log('server started at 3001 port'))

