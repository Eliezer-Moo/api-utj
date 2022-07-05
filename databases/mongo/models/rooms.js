const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    doors:{
        type: [String],
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
    users:[{
        type: Schema.Types.ObjectId,
        refs: 'users',
    }],
    devices:[{
        type: Schema.Types.ObjectId,
        refs: 'devices',
    }],
    fecha: {type: Date, default: Date.now}
})

const model = mongoose.model('rooms', schema);
module.exports = model;