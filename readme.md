
## comandos para iniciar proyecto con json
npm -y init 
## implementar express en el proyecto
npm install express
## levantar servidor
node server


Para levantar el servidor mongo

 "C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="c:\data\db"

para conectar con el gestor mongo

 "C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe"

crear db mongo
use "nombre db"

para borrar db
db.dropDatabase()

crear colección 
db.createCollection('nombre')

instalar monoose para conectar la api con mongodb atlas

instalar dotenv para crear un ambiente de desarrollo

## Despues de clonar el proyecto en local ejecutar el comando
npm install

## Al terminar de instalar las dependencias
- Crear el archivo .env apartir de .env.example

## Comando para levantar el server en local
npm run dev

## endpoint de las collections

ingresos 
https://node-api-iot.herokuapp.com/ingress

egresos
https://node-api-iot.herokuapp.com/ingress

salas
https://node-api-iot.herokuapp.com/rooms

usuarios
https://node-api-iot.herokuapp.com/users

puertas
https://node-api-iot.herokuapp.com/doors

dispositivos
https://node-api-iot.herokuapp.com/devices

