import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap,Router,Routes,RouterStateSnapshot} from '@angular/router';
import {DeviceService} from './device.service';
import {DialogService} from '../dialog.service';
import{Device} from '../models/device';
import {FormControl,FormGroup,Validators,ValidatorFn,AbstractControl} from '@angular/forms';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceComponent implements OnInit {
  device$:Device = new Device(0,"","","","","","",false);
  deviceFormGroup:FormGroup;
  color = 'primary';
  disabled = false;
  checked = false;
  constructor(private route:ActivatedRoute,private router:Router,private deviceService:DeviceService,private dialogService:DialogService) {
    this.createDeviceForm();
   }

  createDeviceForm(){
    this.deviceFormGroup = new FormGroup({
      id:new FormControl(this.device$.id,Validators.required),
      macaddress:new FormControl({value:this.device$.macaddress,disabled:true},Validators.required),
      serialno:new FormControl({value:this.device$.serialno,disabled:true},Validators.required),
      model: new FormControl({value:this.device$.model,disabled:true},Validators.required),
      kernel:new FormControl(this.device$.kernel,[Validators.required,Validators.minLength(2)]),
      firmware:new FormControl(this.device$.firmware,[Validators.required,Validators.minLength(4),regexValidator(/[0-9]{1}[.][0-9]{1}[.][0-9]{1}/)]),
      active:new FormControl(this.device$.active,Validators.required)

    })
  }

  updateDevice(){
    console.log("update device attempt..");
    if(!this.isDeviceUpdated()){
        this.dialogService.alert('device details are not modified');
    }
    this.updateDeviceValues();
    console.log(JSON.stringify(this.device$));

  }
  get formStatus(){
    return JSON.stringify(this.deviceFormGroup.status);
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    console.log("id..."+id);
     this.deviceService.fetchDeviceById(id).subscribe(data =>{console.log(data);this.device$ = data;this.createDeviceForm(),this.checked = this.device$.active});

  }

   isDeviceUpdated():boolean{
     console.log(this.deviceFormGroup.value);
     let str1 = JSON.stringify(this.deviceFormGroup.value);
     console.log(JSON.stringify(this.device$))
     let placeHolderDevice:Device = JSON.parse(JSON.stringify(this.device$));
     delete placeHolderDevice.macaddress;
     delete placeHolderDevice.serialno;
     delete placeHolderDevice.model;
     delete placeHolderDevice.assigned_firmware;
     console.log(JSON.stringify(this.device$));
     console.log(str1);
     console.log(JSON.stringify(placeHolderDevice));
     if(str1 != JSON.stringify(placeHolderDevice)){
        console.log("will update device");
        return true;
     }
    return false;
  }

  updateDeviceValues():void{
      let updatedDevice = JSON.parse(JSON.stringify(this.deviceFormGroup.value));
      let key;
      for (key in updatedDevice){
          this.device$[key] = updatedDevice[key];
      }
  }

  cancelChangesOnDevice(){
    this.dialogService.confirm("Are you sure to discard changes?").subscribe(data =>{
      if(data){
        //navigate back to device list
        this.router.navigate(['/layout/devices']);
      }
      else {
        //do nothing
      }
    });
  }

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
    if(!this.isDeviceUpdated()){
      return true;
    }
    return this.dialogService.confirm('discard changes?');
  }



}

export function regexValidator(firmwarePattern:RegExp):ValidatorFn{
  return (control:AbstractControl):{[key:string]:any} =>{
    const validFirmwareVersion = firmwarePattern.test(control.value);
    console.log("regex status::",validFirmwareVersion);
    console.log(">>>", !validFirmwareVersion ?  {'invalid versioning':{value:control.value}} :'valid versioning');
    return ! validFirmwareVersion ?  {'invalid versioning':{value:control.value}} :null;
  }
}
