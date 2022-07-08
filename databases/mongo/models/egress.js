const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  device: [
    {
      type: Schema.Types.ObjectId,
      refs: 'devices',
    },
  ],
  door: [
    {
      type: Schema.Types.ObjectId,
      refs: 'doors',
    },
  ],
  fecha: { type: Date, default: Date.now },
});

const model = mongoose.model('egress', schema);
module.exports = model;
