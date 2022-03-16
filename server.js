const express = require('express');/*invocar el módulo de terceros - express*/
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/smart',{userNewUrlParser:true})
    .then(()=> console.log('conectado a la BD smart'))
    .catch(()=> console.log('error al conectarse a la BD'))

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    puesto: String
})

const Usuario = mongoose.model('usuario', usuarioSchema)

getUsuarios()
async function getUsuarios(){
    const usuarios = await Usuario.find()
    console.log(usuarios)
}

//createUsuario(); // para ejecutar la creacion cada que se corra el archivo
async function createUsuario(){
    const usuario = new Usuario({
        nombre: String,
        apellidos: String,
        puesto: String
    });

    const result = await usuario.save();
    console.log(result);
}

const { append } = require('express/lib/response');
const res = require('express/lib/response');

const servidor = express();/* creando un objeto de express */
servidor.use(express.json())
/* const user = require('./routes/user');
servidor.use('/api/', user) */
const port = process.env.PORT || 3000

servidor.listen(port, ()=> {

    console.log('Servidor en linea en el puerto: ' + port); /* estableciendo el puerto para TCP para nuestro servidor express */
});

var usuarios = [
    {"id" : 1, "nombre" : "Corabella Halste", "puesto": "Administrador"  },
    {"id" : 2, "nombre" : "Francesco Huot", "puesto": "Recursos Humanos"  }
/*     {"id" : 3, nombre : "Ibrahim Downe", puesto: "Servicios"  },
    {"id" : 4, nombre : "Milicent Dohrmann", puesto: "Ingeniero"  },
    {"id" : 5, nombre : "Zandra Chrichton", puesto: "Soporte"  },
    {"id" : 6, nombre : "Madelina Olenikov", puesto: "Juridico"  },
    {"id" : 7, nombre : "Jone Scriver", puesto: "Vigilancia"  },
    {"id" : 8, nombre : "Berna Zohrer", puesto: "Vigilancia"  },
    {"id" : 9, nombre : "Jacqui Mates", puesto: "Administrador"  },
    {"id" : 10, nombre : "Gaelan Cridland", puesto: "Recursos Humanos"  },
    {"id" : 11, nombre : "Hiram Lys", puesto: "Servicios"  },
    {"id" : 12, nombre : "Fleur Kellittz", puesto: "Soporte"  },
    {"id" : 13, nombre : "Lorenza Pryell", puesto: "Marketing"  },
    {"id" : 14, nombre : "Cherye Redley", puesto: "Publicidad"  },
    {"id" : 15, nombre : "Myca Bertrand", puesto: "Ingeniero"  },
    {"id" : 16, nombre : "Colver Jakel", puesto: "Contabilidad"  },
    {"id" : 17, nombre : "Hendrick Kennaird", puesto: "Administrador"  },
    {"id" : 18, nombre : "Kelbee Farrens", puesto: "Gerencia"  },
    {"id" : 19, nombre : "Sanford Tite", puesto: "Gerencia"  },
    {"id" : 20, nombre : "Burnard Brunskill", puesto: "Vigilancia"  } */
];

servidor.get('/api/usuarios/',(req, res)=>{
    res.send("lista de usuarios");
    res.json(usuarios);
});

