const express = require('express')
const { append } = require('express/lib/response');
const res = require('express/lib/response');
const router = express.Router()

var usuarios = [
    {"id" : 1, "nombre" : "Corabella Halste", "Puesto": "Administrador"  },
    {"id" : 2, "nombre" : "Francesco Huot", "Puesto": "Recursos Humanos"  },
    {"id" : 3, "nombre" : "Ibrahim Downe", "Puesto": "Servicios"  },
    {"id" : 4, "nombre" : "Milicent Dohrmann", "Puesto": "Ingeniero"  },
    {"id" : 5, "nombre" : "Zandra Chrichton", "Puesto": "Soporte"  },
    {"id" : 6, "nombre" : "Madelina Olenikov", "Puesto": "Juridico"  },
    {"id" : 7, "nombre" : "Jone Scriver", "Puesto": "Vigilancia"  }
    /* {"id" : 8, nombre : "Berna Zohrer", Puesto: "Vigilancia"  },
    {"id" : 9, nombre : "Jacqui Mates", Puesto: "Administrador"  },
    {"id" : 10, nombre : "Gaelan Cridland", Puesto: "Recursos Humanos"  },
    {"id" : 11, nombre : "Hiram Lys", Puesto: "Servicios"  },
    {"id" : 12, nombre : "Fleur Kellittz", Puesto: "Soporte"  },
    {"id" : 13, nombre : "Lorenza Pryell", Puesto: "Marketing"  },
    {"id" : 14, nombre : "Cherye Redley", Puesto: "Publicidad"  },
    {"id" : 15, nombre : "Myca Bertrand", Puesto: "Ingeniero"  },
    {"id" : 16, nombre : "Colver Jakel", Puesto: "Contabilidad"  },
    {"id" : 17, nombre : "Hendrick Kennaird", Puesto: "Administrador"  },
    {"id" : 18, nombre : "Kelbee Farrens", Puesto: "Gerencia"  },
    {"id" : 19, nombre : "Sanford Tite", Puesto: "Gerencia"  },
    {"id" : 20, nombre : "Burnard Brunskill", Puesto: "Vigilancia"  } */
];

router.get('/usuarios/',(req, res)=>{
    res.send("lista de usuarios");
    res.json(usuarios);
})

router.get('/id/:id',(req, res)=>{
    res.send("Datos usuario con el id: " + req.params.id)
})

module.exports = router