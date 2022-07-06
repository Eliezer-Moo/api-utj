const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    name:{
        type: String,
        required: true
    },
    room:[{
        type:Schema.Types.ObjectId,
        refs:'rooms'
    }],
    device:[{
        type: Schema.Types.ObjectId,
        refs: 'devices',
    }],
});

const model = mongoose.model('doors', schema);
module.exports = model;