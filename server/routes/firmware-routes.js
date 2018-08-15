var express = require('express');
var bodyParser = require('body-parser');
var Firmware = require('../models/firmware');
var ApiResponse = require('../models/response');
var multer = require('multer');
var path = require('path');
const fs = require('fs');
var crypto = require('crypto');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
//set defualt directory to uploads
//app.use(express.static(path.join(__dirname,'server')));
//allow CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
var storage = multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    },
    destination:function(req,file,callback){
        callback(null,'./server/uploads')
    }
})
var uploads = multer({storage:storage});
app.get('/',(req,res,next) =>{
    res.send("ok...");
})


app.post('/firmware',(req,res,next) =>{
    console.log(req.body);
    var firmware = new Firmware({
        filename:req.body.filename,
        type:req.body.type,
        version:req.body.version,
        model:req.body.model,
    })
    //save firmware file
    firmware.save((err) =>{
        if (err){
            console.log(err);
            res.json("errr");
          //  res.send(JSON.stringify(new ApiResponse(310,"Error saving document")));
        }
        else{
            //res.send(JSON.stringify(201,new ApiResponse(firmware)));
            res.json("ok..");
        }
    })

})

app.post('/uploadFile',uploads.single("uploads[]",1),(req,res,next) =>{

            new Promise(function(resolve,reject){
                getFileMd5Sum(req.body.filename).then(function(result){
                    var response = new ApiResponse("","");
                    var firmware = new Firmware({
                        filename:req.body.filename,
                        type:req.body.type,
                        version:req.body.version,
                        model:req.body.model,
                        md5sum:result
                    });
                    //check if similar md5sum exists in db, discard file
                    Firmware.find({md5sum:firmware.md5sum},(err,res)=>{
                        if(err){
                            response.resp_code = "300";
                            resp_code = "300";
                            response.resp_message = "Error saving file";
                            resp_message = "Error saving file";
                            //res.json("Error saving file");
                            reject(new ApiResponse(300,"Error saving file"));
                        }
                        else{
                            if(res.length==0){ 
                                console.log("Will save firmware");
                                response = new ApiResponse();
                                firmware.save((err)=>{
                                    if(err){
                                        console.error(err);
                                        response.response_code = "301";
                                        resp_code = "301";
                                        resp_message = "Error saving the firmware";
                                        response.response_message = "Error saving the firmware";
                                        reject(response);
                                    }
                                    else{
                                        response.response_code = "201";
                                        resp_code = "201";
                                        resp_message = "Firmware upload successful";
                                        response.response_message = "Firmware upload successful";
                                        console.log("Firmware saved successfully");
                                        console.log(JSON.stringify(response));
                                        resolve(response);
                                    }
                                })
                            }
                            else{
                                response.response_code = "305";
                                resp_code = "305";
                                resp_message = "Firmware exists";
                                response.response_message = "Firmware exists";
                                console.log("Firmware exists");
                                console.log(JSON.stringify(response));
                                //delete file from directory
                                fs.unlink('./server/uploads/'+req.body.filename,(err)=>{
                                    if(err)
                                        console.error(err);
                                    else
                                    console.log("File deleted sucessfully");
                                })
                                resolve(response);
                            }
                        }
                    })
                    console.log(JSON.stringify(response));
                },function(err){
                    console.log(err);
                    response.response_code = "310";
                    resp_code = "310";
                    resp_message = "Error getting file md5sum";
                    response.response_message = "Error getting file md5sum";
                    console.log("Error getting file md5sum");
                    reject(response);
                })
            }).then((resp) =>{
                console.log("Will return...");
                console.log(JSON.stringify(resp));
                res.json(JSON.stringify(resp));
            })
})

//read file and get md5sum
function getFileMd5Sum(filename){
    return new Promise(function(resolve,reject){
        fs.readFile('./server/uploads/'+filename,(err,data) =>{
            if(err){
                reject(err);
            }
            else{
                resolve(crypto.createHash('md5').update(data.toString()).digest('hex'));
            }
        })
    })
}
module.exports = app;

