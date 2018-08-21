import {Component,OnInit} from '@angular/core';
import {ProductDialog} from './products.dialog';
import {MatDialog,PageEvent,MatTableDataSource} from '@angular/material';
import {Product} from '../models/products';
import {ProductsService}  from './products.service';
import {paginatorFunction} from '../common/PaginatorFunction';
@Component({
    selector:'product-component',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css'],
    providers:[ProductsService]
})

export class ProductsComponent implements OnInit{
    products:Product[];
    productsCopy:Product[];
    paginatedProducts:Product[];
    dataSource:MatTableDataSource<Product>;
    dataLength:number;
    pageSize:number;
    displayedColumns:string[];
    pageIndex:number = 0;
    constructor(private dialog:MatDialog,private productService:ProductsService){}
    addNewProduct(){
        const dialogRef = this.dialog.open(ProductDialog,{
            height:'auto',
            width:'300',
            data:{
                title:'Add new Product'
            }
        })
    }
    filterProducts(text:string){
        console.log("Filter products init...");
        queryString = text;
        this.products = this.productsCopy.filter(this.filterProduct);
    }
    filterProduct(product:Product){
        var patt = new RegExp(queryString,"i");
        if(patt.test(""+product.cost) || patt.test(""+product.created_at) || patt.test(""+product.expiry_date) ||
            patt.test(product.gen_name) || patt.test(""+product.onhand_qty) || patt.test(""+product.ordering_price)||
            patt.test(""+product.selling_price) || patt.test(product.product_code) || patt.test(""+product.product_id) || 
            patt.test(product.product_name) || patt.test(""+product.profit) || patt.test(""+product.original_quantity)){
                return product;
            }
    }
    fetchAllProducts():Product[]{
        this.productService.fetchAllProducts().subscribe(data =>{this.products = data.response_message;this.productsCopy = data.response_message;this.paginatedProducts = data.response_message;this.dataLength = data.response_message.length;console.log(data)})
        return this.products;
    }
    paginateValues(pageSize:number,pageIndex:number){
        this.products = <Product[]>paginatorFunction(this.paginatedProducts,pageSize,pageIndex);
    }

    navigateToStockItem(id:number){
        console.log("click.."+id);
        //this.router.navigate(['/layout/devices/device-list',id]);
      }
    ngOnInit(){
        //this.fetchAllProducts();
        this.dataSource = new MatTableDataSource(this.fetchAllProducts());
        this.displayedColumns = ['product_id','product_name','gen_name','product_code','supplier','created_at','expiry_date','ordering_price','price','original_quantity','onhand_qty','cost'];
        this.pageSize = 10;
    }
}
var queryString = "";

