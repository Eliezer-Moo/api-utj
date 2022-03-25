const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    puesto:{
        type: String,
        required: true
    },
    usuario:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: true,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)