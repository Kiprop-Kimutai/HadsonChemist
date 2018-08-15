var express = require("express");
var Device = require('../models/device');
var ApiResponse = require('../models/response');
var app = express();

app.get('/',(req,res,next)=>{
    res.send("device routes...");
})


app.post('/add_device',(req,res,next) =>{
    var device = new Device({
        macaddress:req.body.macaddress,
        serialno:req.body.serialno,
        model:req.body.serialno,
        kernel:req.body.serialno,
        firmware:req.body.firmware,
        assigned_firmware:req.body.assigned_firmware,
        active:req.body.active
    })

    device.findByMacAddress({macaddress:device.macaddress},(resultset)=>{
        if(resultset.length>0){
            console.log("Device exists");
            res.json(JSON.stringify(new ApiResponse(300,"Device exists")));
        }
        else{
            device.save(function(err){
                if(err){
                    console.log(err);
                    console.log("Error saving the device");
                    res.json(JSON.stringify(new ApiResponse(303,"Error saving device")));
                }
                else{
                    console.log("Device saved successfully");
                    res.json(JSON.stringify(201,"Device saved successfully"));
                }
        
            })
        }
    })
})

module.exports = app;