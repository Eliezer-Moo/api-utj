const express = require('express');
const app = express();
const {port} = require('./config');
const usersRoutes = require('./src/routes/users');
const devicesRoutes = require('./src/routes/devices');
const roomsRoutes = require('./src/routes/rooms');
const ingressRoutes = require('./src/routes/ingress');
const egressRoutes = require('./src/routes/egress');

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/devices', devicesRoutes);
app.use('/rooms', roomsRoutes);
app.use('/ingress', ingressRoutes);
app.use('/egress', egressRoutes);

app.listen(port, ()=>{
    console.log('Server listen on port', port);
})