const mongoose = require("mongoose");
const { Schema } = mongoose;
/**
 * Datos llenamos desde el módulo de IoT
 */
const schema = new Schema({
  ingres:{
    type: String
  },
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
