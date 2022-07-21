const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');
module.exports = async (req, res,  next) =>{
    try {
        const token = req.headers['Authorization'] ? req.headers['Authorization'].replace('Bearer', ''): undefined;
        if (!token) return res.status(401).send('Acceso denegado. Requiere un token valido')
        const data = jwt.verify(token, jwtSecret);
    } catch (error) {
        
    }
};