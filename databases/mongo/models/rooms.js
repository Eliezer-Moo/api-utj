const mongoose = require('mongoose');
const {Schema} = mongoose;
/**
 * name: tipo de dato para llenar con un input
 * descripción: tipo de dato para llenar con un textarea
 * capacity: tipo de dato para llenar con un input
 * status: dato para llenar con actualización y borrado lógico
 * doors: dato para para seleccionar de un select
 * users: dato seleccionado con la lógica de la API
 * devices: dato seleccionado de un select
 */
const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    capacity:{
        type: Number,
        required: true
    },
    status:{
        type: Boolean,
        default: true,
        required: true
    },
    doors:[{
        type: Schema.Types.ObjectId,
        ref:'doors'
    }],
    users:[{
        type: Schema.Types.ObjectId,
        ref: 'users',
    }],
    date: {type: Date, default: Date.now}
})

const model = mongoose.model('rooms', schema);
module.exports = model;