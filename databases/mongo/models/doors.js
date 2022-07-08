const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    }
});

const model = mongoose.model('doors', schema);
module.exports = model;