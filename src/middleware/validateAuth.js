const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');
module.exports =  (req, res,  next) =>{
    try {
        const token = req.headers['authorization'] ? req.headers['authorization'].replace('Bearer', ''): undefined;
        //if (!token) return res.status(401).send('Acceso denegado. Requiere un token valido')
        const data = jwt.verify(token, jwtSecret);
        next();
    } catch (error) {
        return res.send(error.message);
    }
};