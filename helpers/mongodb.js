const mongoose = require('mongoose');
const {mongoURI} = require('../config');

/**verificar coneccion a la bd en mongo atlas */
const checkConnection =()=>{
  return  mongoose.connection.readyState;
};

const connect = async () =>{
    try {
        if(!checkConnection()){
            console.log('Connecting...');
           await mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology: true });
        }
        console.log('Coneccted successfully');
    } catch (error) {
        console.error(error);
    }
}

const disconnect = async () =>{
    await mongoose.connection.close();
    return checkConnection();
}

module.exports = { connect, checkConnection, disconnect};