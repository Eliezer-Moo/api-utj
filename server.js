const express = require('express');/*invocar el módulo de terceros - express*/
const res = require('express/lib/response');
const servidor = express();/* creando un objeto de express */
servidor.listen(5000); /* estableciendo el puerto para TCP para nuestro servidor express */