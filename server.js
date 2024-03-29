const express = require('express');
const app = express();
const cors = require('cors');
const {port} = require('./config');
const usersRoutes = require('./src/routes/users');
const devicesRoutes = require('./src/routes/devices');
const roomsRoutes = require('./src/routes/rooms');
const ingressRoutes = require('./src/routes/ingress');
const egressRoutes = require('./src/routes/egress');
const doorsRoutes = require('./src/routes/doors');

app.use(cors({origin:"*",
    methods:['GET', 'PUT','POST','DELETE']
}))

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/devices', devicesRoutes);
app.use('/rooms', roomsRoutes);
app.use('/ingress', ingressRoutes);
app.use('/egress', egressRoutes);
app.use('/doors', doorsRoutes);

app.listen(port, ()=>{
    console.log('Server listen on port', port);
})