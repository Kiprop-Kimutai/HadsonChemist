var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pbu_tms',{useNewUrlParser:true});
var Schema = mongoose.Schema;

//create a counter schema for auto-increment purposes
var counterSchema = new Schema({
    _id:{type:String,require:true},
    seq:{type:Number,default:0}
}
)
var products_counter = mongoose.model('products_counter',counterSchema);

var productsSchema = new Schema({
    id:{type:Number,unique:true},
    product_code:{type:String,required:true},
    gen_name:{type:String},
    product_name:{type:String},
    invoice_no:{type:String},
    supplier:{type:String},
    units:{type:Number},
    unit_quantity:{type:Number},
    unit_price:{type:Number},
    actual_cost:{type:Number},
    discount:{type:Number},
    unit_discount:{type:Number},
    cost:{type:Number},//(actual_cost-discount)
    ordering_price:{type:Number},//(actual_cost/original_quantity)
    selling_price:{type:Number},//(percentage of selling price)
    profit:{type:Number}, //(ordering_price-selling_price)
    original_quantity:{type:Number},
    qty_sold:{type:Number},
    onhand_qty:{type:Number}, //(original_quantity-qty_sold)
    expiry_date:{type:Date},
    created_at:{type:Date},
    updated_at:{type:Date},
    

})

productsSchema.pre('save',function(next){
    var doc = this;
    console.log(">>>");
    products_counter.findByIdAndUpdate({_id:'entityId'},{$inc:{seq:1}},{new:true,upsert:true}).then(function(count){
        doc.id = count.seq;
        var date = new Date();

        if(!doc.created_at){
            doc.created_at = date;
        }
        doc.updated_at = date;
        next();
    }).catch(function(err){
        console.error(err);
        throw err;
    });
})


//create a model from schema and export for use in other files
var Product = mongoose.model('Product',productsSchema);
module.exports = Product;
