var express = require('express');
var router = express.Router();

//api listings done here
router.get('/', (req,res,next) =>{
    res.send("app server is working fine..");
})

module.exports = router;