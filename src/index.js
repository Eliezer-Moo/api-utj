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
    "mongodb+srv://adminsa:<password>@cluster0.k3v3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.listen(port, ()=> console.log('server escuchando en el puerto: ', port))