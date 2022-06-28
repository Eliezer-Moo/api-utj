const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    device:[{
        type:Schema.Types.ObjectId,
        required:true
    }],
    ingress:{
        type:Number
    },
    egress:{
        type:Number
    }
});