import {Component,Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
    selector:'supplier-dialog',
    template:``
})
export class SupplierDialogComponent {
    constructor(public dialogRef:MatDialogRef<SupplierDialogComponent>,@Inject(MAT_DIALOG_DATA)public data:any){

    }
}