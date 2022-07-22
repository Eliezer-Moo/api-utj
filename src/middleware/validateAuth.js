const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');

const { jwtSecret } = require('../../config');

module.exports =  (req, res, next) =>{
    try {
        const token = req.headers['authorization'] ? req.headers['authorization'].replace('Bearer', ''): undefined;
        if (!token) return res.status(401).send('Acceso denegado. Requiere un token valido')
        const decodedToken = jwt.verify(token, jwtSecret);
        req.userData = decodedToken;
        
        next();
    } catch (error) {
        res.send(boom.forbidden('Unauthorized'));
    }
};