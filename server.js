const express = require('express');
const app = express();
const {port} = require('./config');
const usersRoutes = require('./src/routes/users');
const devicesRoutes = require('./src/routes/devices');
const roomsRoutes = require('./src/routes/rooms');
const recordsRoutes = require('./src/routes/records');

app.use('/users', usersRoutes);
app.use('/devices', devicesRoutes);
app.use('/rooms', roomsRoutes);
app.use('/records', recordsRoutes);

app.listen(port, ()=>{
    console.log('Server listen on port', port);
})