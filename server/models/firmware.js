var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/pbu_tms",{useNewUrlParser:true});
var Schema = mongoose.Schema;

//create a counter schema for field auto-increment purposes
var counterSchema = new Schema({
    _id:{type:String,require:true},
    seq:{type:Number,default:0}
})

var firmware_counter = mongoose.model('firmware_counter',counterSchema);

//create a schema for firmware file
var firmwareSchema = new Schema({
    id:{type:Number,unique:true},
    filename:{type:String,unique:true},
    type:String,
    version:String,
    model:String,
    md5sum:String
    
})

firmwareSchema.pre('save',function(next){
    var doc = this;
    firmware_counter.findByIdAndUpdate({_id:'entityId'},{$inc:{seq:1}},{new:true,upsert:true}).then(function(count){
        console.log(JSON.stringify(count));
        doc.id = count.seq;
        next();
    }).catch(function(err){
        console.error(err);
        throw err;
    });
})

//create a model from the schema and export for use
var Firmware = mongoose.model('Firmware',firmwareSchema);
module.exports = Firmware;