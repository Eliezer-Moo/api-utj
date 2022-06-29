const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    name:{
        type:String,
        required: true
    },
    room:[{
        type:Schema.Types.ObjectId, refs: 'rooms',
        required: true
    }]
});

const model = mongoose.model('devices', schema);
module.exports = model;