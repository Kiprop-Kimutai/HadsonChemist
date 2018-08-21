import {Component,OnInit,Injectable, Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
    selector:'customer-dialog',
    template:``
})
export class CustomerDialog implements OnInit{
    constructor(@Inject(MAT_DIALOG_DATA)public data:any,public dialogRef:MatDialogRef<CustomerDialog>){
        
    }
    ngOnInit(){

    }
}