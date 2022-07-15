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
    },
    room: [
        {
          type: Schema.Types.ObjectId,
          ref: "rooms",
        },
      ],
});

const model = mongoose.model('doors', schema);
module.exports = model;