const express = require('express');/*invocar el módulo de terceros - express*/
const { append } = require('express/lib/response');
const res = require('express/lib/response');

const servidor = express();/* creando un objeto de express */
const user = require('./routes/user');
servidor.use(express.json())
servidor.use('/api/', user)
const port = process.env.PORT || 3000

servidor.listen(port, ()=> console.log('Servidor en línea en el puerto: ' + port)); /* estableciendo el puerto para TCP para nuestro servidor express */