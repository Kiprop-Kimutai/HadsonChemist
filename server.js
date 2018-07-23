var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
const api = require('./server/routes/api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//point static path to app(in development, in production, you can move to dist)
app.use(express.static(path.join(__dirname,"dist")));
app.use('/api',api);
//catch all wild routes and return index.html
app.get('*',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'dist/index.html'))
})
//create server
var server = app.listen(3000,()=>{
    var address = "127.0.0.1";
    var port  = server.address().port;
    console.log("server listening at http://%s:%s",address,port);
})