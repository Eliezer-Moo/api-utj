const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  device: [
    {
      type: Schema.Types.ObjectId,
      refs: 'devices',
      required: true,
    },
  ],
  door: [
    {
      type: Schema.Types.ObjectId,
      refs: 'rooms.door',
      required: true,
    },
  ],
  fecha: { type: Date, default: Date.now },
});

const model = mongoose.model('ingress', schema);
module.exports = model;