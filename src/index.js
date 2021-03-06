const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const users = require('./routes/user')
const salas = require('./routes/sala')
const auth = require('./routes/auth')

const port = process.env.PORT || 9000

//middlewere
app.use(express.json())
app.use('/api', users)
app.use('/api', salas)
app.use('/api', auth)

//ruta principal
app.get('/', (req, res) => {
        res.send('Api con mongoDB')
    })
    //coneccion con mongodb atlas
mongoose.connect(
        process.env.MONGODB_URI)
    .then(() => { console.log('conectado a mongodb ATLAS') })
    .catch((error) => console.error(error))

app.listen(port, () => console.log('server escuchando en el puerto: ', port))