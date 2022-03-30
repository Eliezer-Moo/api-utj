const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  puesto: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["administrador", "editor", "vigilante"],
    required: true,
  },
  salas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sala'
  }],

  status: {
    type: Boolean,
    default: true,
    required: true,
  },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
