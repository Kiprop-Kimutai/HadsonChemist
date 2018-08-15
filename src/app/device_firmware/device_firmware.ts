import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from  '@angular/forms';
@Component({
    selector:'device-firmware',
    templateUrl:'./device_firmware.html',
    styleUrls:['./device_firmware.css']
})
export class DeviceFirmwareComponent implements OnInit{
    queryFirmwareFormGroup:FormGroup;
    queryFirmwareParams:QueryFirmwareParams = {device_model:'',firmware:''};
    constructor(){
        this.createQueryFormGroup();
    }
    createQueryFormGroup(){
        this.queryFirmwareFormGroup = new FormGroup({
            'device_model':new FormControl('',[Validators.required]),
            'firmware':new FormControl('',[Validators.required]),
            'version':new FormControl('',[Validators.required])
        })
    }
    ngOnInit(){

    }
}

export interface QueryFirmwareParams{
    device_model:any;
    firmware:any
}