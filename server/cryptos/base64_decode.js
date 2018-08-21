var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname,'server')));
console.log(crypto.createHash('md5').update('Jonah').digest('hex'));

var digestData = "";
//read file

const readFile = function(filename,callback){
    var data = "kk";
    fs.readFile(filename, (err,data)=>{
        if(err)
        console.error(err);
        else{
            //console.log(data.toString());
            callback(data.toString());
            //convert binary data to base64 encoded string
        
        }
    })
}

//encode file contents to base64 string
const base64_encode = function(filename){
    //read binary data from file
    var data = fs.readFileSync(filename);
    return data.toString('base64');
}

//decode file bas64 string and write to file
const base64_decode =  function(base64String,filename){
    var data = new Buffer(base64String,'base64');
    console.log(data);
    fs.writeFileSync(filename,data);
}

readFile('./uploads/00_25_7E_03_52_12#180324025216.txt',(data) =>{
    //console.log(data);
    console.log("init...");
    console.log(crypto.createHash('md5').update(data).digest('hex'));
})

//var data = fs.readFileSync('./uploads/00_25_7E_03_52_12#180324025216.txt');
//console.log(data.toString('base64'));

//base64_decode("am9uYWg=","./uploads/test.txt");

module.exports = base64_decode;
//module.exports = base64_encode;
