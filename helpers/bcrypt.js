const bcrypt = require('bcrypt');
const {saltRounds} = require('../config')

/**funcion para generar el Salt */
const getSalt = async () =>{
    return await bcrypt.genSaltSync(+saltRounds);
};

/**funcion encriptar con hash la contraseña del usuario */
const encryptPassword = async (password) =>{
    const salt = await getSalt();
    return await bcrypt.hashSync(password, salt);
};

module.exports = {encryptPassword};