const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
    //const jwt = require("jsonwebtoken")
    /* const { append } = require('express/lib/response');
    const res = require('express/lib/response'); */
const router = express.Router();
const userSchema = require("../schemas/users");
const validateSchema = require("../middleware/validateData");
const {getAll, createOne, updateOne, deleteOne, signIn, signUp} = require('../controllers/users');

const populate = { path: "salas", select: "nombre aforo" };
/**Nuevos requests */
router.get('/', getAll);
router.post('/', validateSchema(userSchema), createOne);
router.post('/sign-in', validateSchema(userSchema), signIn);
router.post('/sing-up', validateSchema(userSchema), signUp);
router.put('/:id', validateSchema(userSchema), updateOne);
router.put('/:id',  deleteOne);
//crear usuario
/* router.post("/usuarios", async(req, res) => {
    //const user = await userSchema(req.body)
    let user = await userSchema.findOne({ email: req.body.email });
    if (user) return res.status(400).send("Usuario ya existe en el sistema");
    const salt = await bcrypt.genSalt(12)
    const hashPass = await bcrypt.hash(req.body.password, salt)


    user = new userSchema({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        puesto: req.body.puesto,
        email: req.body.email,
        password: hashPass,
        isAdmin: req.body.isAdmin,
        role: req.body.role,
        salas: req.body.salas,
        status: req.body.status,
    });
    const jwToken = user.generateJWT()
    user
        .save()
        .then((data) =>
            res.header('Authorization', jwToken).json({
                _id: user._id,
                nombre: user.nombre,
                puesto: user.puesto,
                email: user.email,
                role: user.role,
                salas: user.salas
            })
        )
        .catch((error) => res.json({ message: error }));
});

//obtener todos los usuarios
router.get("/usuarios", async(req, res) => {
    const users = await userSchema
        .find()
        .populate(populate)
        .then((users) => res.send({ users }))
        .catch((error) => res.json({ message: error }));
});

//obtener por id
router.get("/usuarios/:id", async(req, res) => {
    const { id } = await req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//actualizar por id
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellidos, puesto, usuario, status } = req.body;

    userSchema
        .updateOne({ _id: id }, { $set: { nombre, apellidos, puesto, usuario, status } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar por id
router.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;

    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}); */

module.exports = router;