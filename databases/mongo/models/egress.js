const mongoose = require("mongoose");
const { Schema } = mongoose;
/**
 * Datos llenamos desde el módulo de IoT
 */
const schema = new Schema({
  egress:{
    type:String
  },
  device: [
    {
      type: Schema.Types.ObjectId,
      ref: 'devices',
    },
  ],
  date: { type: Date, default: Date.now },
});

const model = mongoose.model('egress', schema);
module.exports = model;
