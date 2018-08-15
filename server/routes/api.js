var express = require('express');
var app = express();    
var FirmwareRoutes = require('./firmware-routes');
const DeviceRoutes = require('./device-routes');
app.get('/',(requestAnimationFrame,res,next)=>{
    res.send("ok...");
})
app.use('/firmware_routes',FirmwareRoutes);
app.use('/device_routes',DeviceRoutes);

module.exports = app;