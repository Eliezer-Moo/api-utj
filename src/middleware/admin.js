const express = require('express')
const router = express.Router()

module.exports = function(req, res, next) {
    if(!req.user.isAdmin) return res.status(403).json({ message: 'No tienes acceso autorizado a este recurso' })
    next()
}

module.exports = router