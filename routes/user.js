const express = require('express')
const router = express.Router()

router.get('/list',(req, res)=>{
    res.send("lista de usuarios")
})

router.get('/id/:id',(req, res)=>{
    res.send("Datos usuario con el id: " + req.params.id)
})

module.exports = router