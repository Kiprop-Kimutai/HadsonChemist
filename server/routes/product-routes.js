const express = require('express');
const Product = require('../models/products');
var ApiResponse = require('../models/response');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res,next)=>{
    res.send("hitting products endpoint ...");
})

//end point to handle addition of new products
app.post('/addproduct',(req,res,next) =>{
    console.log(req.body);
    new Promise(function(resolve,reject){
        var product = new Product({
            product_code:req.body.product_code,
            gen_name:req.body.gen_name,
            product_name:req.body.product_name,
            invoice_no:req.body.invoice_no,
            supplier:req.body.supplier,
            units:req.body.units,
            unit_quantity:req.body.unit_quantity,
            unit_price:req.body.unit_price,
            actual_cost:req.body.actual_cost,
            discount:req.body.discount,
            unit_discount:req.body.unit_discount,
            cost:req.body.cost,
            ordering_price:req.body.ordering_price,
            selling_price:req.body.selling_price,
            profit:req.body.profit, 
            original_quantity:req.body.original_quantity,
            qty_sold:req.body.qty_sold,
            onhand_qty:req.body.onhand_qty, 
            expiry_date:req.body.expiry_date,
        });
        //save product
        console.log(">>>");
        product.save((err)=>{
            if(err){
                console.error(err);
                reject(new ApiResponse(301,"Error saving product"));
            }
            else{
                resolve(new ApiResponse(201,"stock added successfully"))
            }
        })
    }).then(function(result){res.json(result)},function(err){res.json(err)})
})

//update a product
app.post('/updateproduct',(req,body,next)=>{
    new Promise((resolve,reject) =>{
        var product = new Product({
            product_code:req.body.product_code,
            gen_name:req.body.gen_name,
            product_name:req.body.product_name,
            cost:req.body.cost,
            ordering_price:req.body.ordering_price,
            price:req.body.price,
            profit:req.body.profit,
            supplier:req.body.supplier,
            onhand_qty:req.body.onhand_qty,
            original_quantity:req.body.original_quantity,
            quantity_sold:req.body.quantity_sold,
            expiry_date:req.body.expiry_date
                  
        })
        product.save((err)=>{
            if(err){
                console.error(err);
                reject(new ApiResponse(302,"Error updating product"))
            }
            else{
                resolve(new ApiResponse(201,"Product updated successfully"));
            }
        })
    }).then(function(result){res.json(result)},function(err){res.json(err)});
    
})

//fetch all products
app.get('/fetchproducts',(req,res,next)=>{
    console.log("Trying to fetch products..");
    new Promise((resolve,reject) =>{
        Product.find({},function(err,products){
            if(err){
                console.error(err);
                reject(new ApiResponse(310,"Error fetching products"));
            }
            else{
                console.log(JSON.stringify(products));
                resolve(new ApiResponse(201,products));
            }
        })
    }).then((result) =>{
        console.log("Sending response...");
        res.json(result);
    },(err)=>{
        console.log("sending err...");
        res.json(err);
    })
})

//fetch a product by a field
app.get('/uniqueproduct',(req,res,next)=>{
    //model form data to  send {field_name:'abcd',field_value:'efgh'}
    var fieldName = req.body.fieldName;
    var fieldValue = req.body.fieldValue;
    new Promise(function(resolve,reject){
        Product.findOne({fieldName:fieldValue},(err,product)=>{
            if(err){
                console.error(err);
                reject(new ApiResponse(320,"Error filtering product"));
            }
            else{
                resolve(new ApiResponse(201,JSON.stringify(product)));
            }
        })
    })
})

module.exports = app;

