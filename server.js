var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
//const api = require('./server/routes/api');
const api = require('./server/routes/api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//point static path to app(in development, in production, you can move to dist)
app.use(express.static(path.join(__dirname,"dist")));

// headers and content type
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//app.use('/api',api);
app.use('/api',api);
//catch all wild routes and return index.html
app.get('*',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
})
//create server
var server = app.listen(2000,()=>{
    var address = "127.0.0.1";
    var port  = server.address().port;
    console.log("server listening at http://%s:%s",address,port);
})