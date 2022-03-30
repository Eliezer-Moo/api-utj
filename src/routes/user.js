const express = require('express')
const mongoose = require('mongoose')
/* const { append } = require('express/lib/response');
const res = require('express/lib/response'); */
const router = express.Router()
const userSchema = require('../models/user')

const populate = {path:'salas', select:'nombre aforo'}
//crear usuario
router.post('/usuarios',  async(req, res) =>{
    const user = await userSchema(req.body)
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }))
})

//obtener todos los usuarios
router.get('/usuarios',async(req, res)=>{
    await userSchema
        .find()
        .populate(populate)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }))
})

//obtener por id
router.get('/usuarios/:id',async(req, res)=>{
    const {id} = await req.params
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }))
})

//actualizar por id
router.put('/usuarios/:id',(req, res)=>{
    const {id} = req.params
    const {nombre, apellidos, puesto, usuario, status} = req.body

    userSchema
        .updateOne({_id:id},{ $set :{nombre, apellidos, puesto, usuario, status} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }))
})

//eliminar por id
router.delete('/usuarios/:id',(req, res)=>{
    const {id} = req.params

    userSchema
        .deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }))
})

module.exports = router