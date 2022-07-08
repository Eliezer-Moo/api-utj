const mongoose = require('mongoose');
const {Schema} = mongoose;

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
});

const model = mongoose.model('users', schema);
module.exports = model;