module.exports ={
    validateRequiredEnvs:(requiredEnvs) =>{
        for(const requiredEnv of requiredEnvs){
            if(!process.env[requiredEnv]) 
                throw new Error(`${requiredEnv} must be on the env file`);
        }
    },
};

/**Validación de las variables de entorno*/ 