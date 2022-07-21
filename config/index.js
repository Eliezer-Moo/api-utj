module.exports = {
    port: process.env.PORT,
    mongoURI: process.env.MONGO_URI,
    saltRounds: process.env.SALT_ROUNDS,
    jwtSecret: process.env.SECRET_KEY_JWT_API
}