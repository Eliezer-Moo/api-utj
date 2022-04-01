const express = require('express')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')
const authorize = require('../middleware/role')
const Role = require('../middleware/role')
    /* const { append } = require('express/lib/response');
    const res = require('express/lib/response'); */
const router = express.Router()
const salasSchema = require('../models/salas')

//crear sala
router.post('/salas', auth, async(req, res) => {
    const sala = await salasSchema(req.body)
    sala
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//obtener todas las salas
router.get('/salas', [auth, admin, authorize([Role.administrador, Role.user])], async(req, res) => {
    await salasSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//obtener por id
router.get('/salas/:id', async(req, res) => {
    const { id } = await req.params
    salasSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//actualizar por id
router.put('/salas/:id', (req, res) => {
    const { id } = req.params
    const { nombre, aforo, status } = req.body

    salasSchema
        .updateOne({ _id: id }, { $set: { nombre, aforo, status } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//eliminar por id
router.delete('/salas/:id', (req, res) => {
    const { id } = req.params

    salasSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router