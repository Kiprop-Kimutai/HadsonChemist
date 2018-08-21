import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpEvent} from '@angular/common/http';
import {Product} from '../models/products';

@Injectable()
export class ProductsService{
    constructor(private http:HttpClient){}

    fetchAllProducts():any{
        return this.http.get('http://localhost:2000/api/products/fetchproducts');
    }

    addProduct(product:Product){
        let httpHeaders = new HttpHeaders({'Content-Type':'application/json','auth':''});
        return this.http.post('/url',{body:product},{headers:httpHeaders});
    }
}