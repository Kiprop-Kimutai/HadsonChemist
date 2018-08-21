var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var counterSchema = new Schema({
    _id:{type:String,require:true},
    seq:{type:Number,default:0}
}
)

var sales_counter = mongoose.model('sales_counter',counterSchema);

var sales = new Schema({
    id:{type:Number,unique:true},
    invoice_number:{type:String,unique:true},
    cashier:{type:String},
    amount:{type:Number},
    profit:{type:Number},
    name:{type:String},
    balance:{type:Number},
    created_at:{type:Date}
})