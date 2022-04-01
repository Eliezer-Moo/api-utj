const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    salas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sala"
    }, ],

    status: {
        type: Boolean,
        default: true,
        required: true
    },
    fecha: { type: Date, default: Date.now },
})

userSchema.methods.generateJWT = function() {
    return jwt.sign({
        _id: this._id,
        nombre: this.nombre,
        puesto: this.puesto,
        isAdmin: this.isAdmin,
        role: this.role
    }, process.env.SECRET_KEY_JWT_API)
}

module.exports = mongoose.model("User", userSchema);