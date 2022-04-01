const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const jwToken = req.header('Authorization')

    if (!jwToken) return res.status(401).send('Acceso denegado. Requiere un token valido')

    try {
        const payload = jwt.verify(jwToken, process.env.SECRET_KEY_JWT_API)
        req.user = payload
        next()
    } catch (error) {
        res.status(400).send('Acceso denegado, Token no valido')
    }
}

module.exports = auth