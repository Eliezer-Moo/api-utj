const mongoose = require("mongoose");
const { Schema } = mongoose;
/**
 * nameType: dato para llenar con un input libre
 * door: dato ingresado desde parametro del request
 * users: dato seleccionado con la logica de la API
 */
const schema = new Schema({
  nameType: {
    type: String,
    required: true,
  },
  door: [
    {
      type: Schema.Types.ObjectId,
      ref: "doors",
    },
  ],
});

const model = mongoose.model("devices", schema);
module.exports = model;
