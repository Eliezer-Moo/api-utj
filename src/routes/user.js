const express = require('express')
/* const { append } = require('express/lib/response');
const res = require('express/lib/response'); */
const router = express.Router()
const userSchema = require('../models/user')
//crear usuario
router.post('/usuarios', (req, res) =>{
    const user = userSchema(req.body)
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message : error }))
})

router.get('/usuarios/',(req, res)=>{
    res.send("lista de usuarios");
    res.json(usuarios);
})

router.get('/id/:id',(req, res)=>{
    res.send("Datos usuario con el id: " + req.params.id)
})

module.exports = router