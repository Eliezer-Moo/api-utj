require('dotenv').config();


const { environmentUtils: {validateRequiredEnvs},} = require('./utils');
/**array de las varialbes de entorno */
const requiredEnvs = ['PORT', 'MONGO_URI'];

validateRequiredEnvs(requiredEnvs);

const { mondoDBHelpers } = require('./helpers');

(async () => {
    await mondoDBHelpers.connect();
    //función para requerir la creación de fake data
    +process.argv[2] && require('./databases/mongo/fake')();
    require('./server');
})();

process.on('SIGINT',()=>{
    mondoDBHelpers.disconnect().then((connectionState)=>{
        console.log('Database disconnect, connection state: ', connectionState);
        console.log('Closing process');
        process.exit(0);
    })
})