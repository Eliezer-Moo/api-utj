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

/**funcion para comparar la contraseña que ingresa el usuari
 *  con la que esta almacenada en la base de datos */
const comparePassword = async(passwordFromClient, encryptedPassword) =>{
    return await bcrypt.compareSync(passwordFromClient, encryptedPassword);
};

module.exports = {encryptPassword, comparePassword};