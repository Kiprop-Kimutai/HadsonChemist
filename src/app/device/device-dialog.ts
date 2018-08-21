import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import {Component,Inject,OnInit} from '@angular/core';
import {Device} from '../models/device';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {DialogService} from '../dialog.service';
import {DeviceService} from './device.service';
@Component({
    template:`
    <div>
    <h3 class = "header-label">Register new Device</h3>
    <form [formGroup] = "deviceForm" (ngSubmit) = "registerDevice()">
    <table>
    <tr>
    <td>
    <div>
    <label for = "macaddress" class = "field-label">macaddress</label><br>
    <mat-form-field class = "input-field">
    <input matInput placeholder = "8fghtx"type = "text" formControlName = "macaddress" [(ngModel)] = "device.macaddress" name = "macaddress" required/>
    </mat-form-field>
    </div>
    </td>
    <td>
    <div>
    <label for = "serialno" class = "field-label">serial number</label><br>
    <mat-form-field class = "input-field">
    <input matInput placeholder = "abc123de" type = "text" formControlName = "serialno" [(ngModel)] = "device.serialno" name = "serialno" required/>
    </mat-form-field>
    </div>
    </td>
    </tr>
    <tr>
    <td>
    <div>
    <label for = "model" class = "field-label">model</label><br>
    <mat-form-field class = "input-field">
    <input matInput placeholder = "NewPOS 8210" formControlName = "model" [(ngModel)] = "device.model" name = "model" required/>
    </mat-form-field>
    </div>
    </td>
    <td>
    <div>
    <label for = "kernel" class = "field-label">kernel</label><br>
    <mat-form-field class = "input-field">
    <input matInput placeholder = "1.2.3-aa" formControlName = "kernel" [(ngModel)] = "device.kernel" name = "kernel" required/>
    </mat-form-field>
    </div>
    </td>
    </tr>
    <tr>
    <td>
    <div>
    <label for = "firmware" class = "field-label">firmware</label><br>
    <mat-form-field>
    <input matInput placeholder = "1.0.0" formControlName = "firmware" [(ngModel)] = "device.firmware" name = "firmware" required />
    </mat-form-field>
    </div>
    </td>
    <td>
    </td>
    </tr>
    </table>
    </form>
    <div>
    <label for = "status" class = "field-label">active:</label><br>
    <mat-radio-group class="example-radio-group" [(ngModel)] ="device.active">
    <mat-radio-button class="example-radio-button" *ngFor="let status of statuses" [value]="status">
     {{status}}
    </mat-radio-button>
    </mat-radio-group>
    </div>
    <div>
    <button [disabled] = "deviceForm.status === 'INVALID'" class = "add-button" mat-raised-button (click) = "registerDevice()">add</button>
    </div>
    </div>
    `,
    styleUrls:['./device-dialog.css']
})
export class DeviceDialog implements OnInit{
    device:Device = new Device(0,"","","","","","",false);
    deviceForm:FormGroup;
    statuses:boolean[] = [true,false];
    testStatus:boolean;
    constructor(public dialogRef:MatDialogRef<DeviceDialog>,@Inject(MAT_DIALOG_DATA) public data:any,private dialogService:DialogService,private deviceService:DeviceService){

    }
    onNoClick():void{
        this.dialogRef.close();
    }
    beforeClose(){

    }
    createForm(){
        this.deviceForm = new FormGroup({
            'macaddress':new FormControl('',[Validators.required,Validators.minLength(6)]),
            'serialno':new FormControl('',[Validators.required]),
            'model':new FormControl('',[Validators.required]),
            'kernel':new FormControl('',[Validators.required]),
            'firmware':new FormControl('',[Validators.required])
        })
    }

    registerDevice(){
        this.dialogService.confirm("Are you sure to add?").subscribe(data =>{
            console.log(data);
            if(data == true){
                console.log("will save device");
                console.log(this.device.id);
                this.deviceService.addNewDevice(this.device);
            }
            else{
                console.log("will not save device");
            }
        });
        this.dialogRef.close();
    }

    get FormStatus(){
        return JSON.stringify(this.device);
    }

    ngOnInit(){
        this.createForm();
    }

}

