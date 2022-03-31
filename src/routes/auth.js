const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const userSchema = require("../models/user");

router.post("/auth", async (req, res) => {
  //const user = await userSchema(req.body)
  let user = await userSchema.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Usuario o contraseña incorrectos");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("datos incorrectos");

  const jwToken = jwt.sign({
    _id: user._id,
    nombre: user.nombre,
    puesto: user.puesto
  }, 'Code2020_def');

  res.send(jwToken);

});

module.exports = router;
