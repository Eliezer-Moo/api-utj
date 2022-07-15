const mongoose = require('mongoose');
const {Schema} = mongoose;
/**
 * name: dato para llenar con un input
 * email: dato para llenar con un input
 * password: dato para llenar con un input
 * status: dato para llenar con actualización y borrado lógico
 */
const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type: Boolean,
        default: true,
        required: true
    }
},{timestamps:true});

const model = mongoose.model('users', schema);
module.exports = model;