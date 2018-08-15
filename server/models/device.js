var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/pbu_tms",{useNewUrlParser:true});

var Schema = mongoose.Schema;
//create a counter schema
var CounterSchema =  new Schema({
    _id:{type:String,required:true},
    seq:{type:Number,default:0}
})
var counter = mongoose.model('counter',CounterSchema);

//create device schema
var deviceSchema = new Schema({
    id:{type:Number},
    macaddress:{type:String,required:true,unique:true},
    serialno:{type:String,required:true,unique:String},
    model:String,
    kernel:String,
    firmware:String,
    assigned_firmware:String,
    active:Boolean
})


deviceSchema.pre('save', function(next) {
    var doc = this;
    counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, {new: true, upsert: true}).then(function(count) {
        console.log("...count: "+JSON.stringify(count));
        doc.id = count.seq;
        next();
    })
    .catch(function(error) {
        console.error("counter error-> : "+error);
        throw error;
    });
});

//create a model using the schema and make it available in our application
var Device = mongoose.model('Device',deviceSchema);
module.exports = Device;

