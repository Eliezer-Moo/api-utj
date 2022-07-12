const mongoose = require("mongoose");
const { Schema } = mongoose;
/**
 * nameType: dato para llenar con un input libre
 * room: dato para seleccionar con un select
 * door: dato para seleccionar con un select
 * users: dato seleccionado con la logica de la API
 */
const schema = new Schema({
  nameType: {
    type: String,
    required: true,
  },
  room: [
    {
      type: Schema.Types.ObjectId,
      refs: "rooms",
    },
  ],
  door: [
    {
      type: Schema.Types.ObjectId,
      refs: "doors",
    },
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      refs: "users",
    },
  ],
});

const model = mongoose.model("devices", schema);
module.exports = model;
