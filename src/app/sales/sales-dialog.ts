import {Component,OnInit,Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
    selector:'sales-dialog',
    templateUrl:'./sales.component.html'
})
export class SalesDialog implements OnInit{
    constructor(public dialogRef:MatDialogRef<SalesDialog>,@Inject(MAT_DIALOG_DATA) public data:any){}
    ngOnInit(){

    }
}