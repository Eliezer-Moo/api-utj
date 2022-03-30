const mongoose = require('mongoose')

const salasSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    aforo:{
        type: Number,
        required: true
    },
    status:{
        type: Boolean,
        default: true,
        required: true
    },
    fecha: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Sala', salasSchema)