import {Component,OnInit,Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import {FormGroup,FormControl,Validators,ValidatorFn} from '@angular/forms';
@Component({
    selector:'product-dialog',
    templateUrl:'./product.dialog.html',
    styleUrls:['./product.dialog.css']
})
export class ProductDialog implements OnInit{
    productFormGroup:FormGroup;
    constructor(public dialogRef:MatDialogRef<ProductDialog>,@Inject(MAT_DIALOG_DATA)public data:any){
        this.createProductForm();
    }
    createProductForm(){
        this.productFormGroup = new FormGroup({
            product_code:new FormControl('',Validators.required),
            gen_name:new FormControl('',Validators.required),
            product_name:new FormControl('',Validators.required),
            invoice_no:new FormControl('',Validators.required),
            supplier:new FormControl('',Validators.required),
            units:new FormControl('',Validators.required),//new field
            unit_quantity:new FormControl('',Validators.required),//new field
            unit_price:new FormControl('',Validators.required),////new field
            actual_cost:new FormControl('',[Validators.required]),//new Field(unit_price*units)
            discount:new FormControl('',[]),//new field
            unit_discount:new FormControl('',[]),//new field(discount/units)
            cost:new FormControl('',[]),//(units*unit price-discount)
            ordering_price:new FormControl('',Validators.required),//((cost+discount)/original_quantity)
            selling_price:new FormControl('',Validators.required),//((configure as percentage of ordering price) = 1.x*selling price)
            profit:new FormControl(8,Validators.required),
            original_quantity:new FormControl('',Validators.required),//(units * unit_quantity)
            qty_sold:new FormControl('',Validators.required),//(quantity sold)
            onhand_qty:new FormControl('',Validators.required),//(quantity remaining)
            expiry_date:new FormControl('',Validators.required)
        })
    }

    addProduct(){
        console.log("will add product");
    }
    ngOnInit(){

    }

    testValues(){
        console.log("Price::"+this.productFormGroup.get('profit').value);
        this.productFormGroup.get('profit').setValue(this.productFormGroup.get('price').value-this.productFormGroup.get('ordering_price').value)
    }
}

