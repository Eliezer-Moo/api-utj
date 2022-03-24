const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

const port =process.env.PORT || 9000


//ruta principal
app.get('/', (req, res)=>{
    res.send('Api con mongoDB')
})

//coneccion con mongodb atlas
mongoose.connect(
    process.env.MONGODB_URI)
    .then(()=>{    console.log('conectado a mongodb atlas')})
    .catch((error)=> console.error(error))

app.listen(port, ()=> console.log('server escuchando en el puerto: ', port))