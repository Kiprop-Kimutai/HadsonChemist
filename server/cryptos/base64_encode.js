var fs = require('fs');

const base64_encodefile = function(filename,callback){
    callback(fs.readFileSync(filename,'base64'));
}
module.exports = base64_encodefile;