import {Component,OnInit} from '@angular/core';
import {FirmwareFiles} from '../../models/firmware_files';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {DialogService} from '../../dialog.service';
import {FirmwareService} from '../firmware-service';
import {HttpEventType} from '@angular/common/http';
@Component({
    selector:'saral-devices',
    templateUrl:'./saral-devices.component.html',
    styleUrls:['./saral-devices.component.css']
})
export class SaralDevicesComponent implements OnInit{
    uploadedFile:File;
    uploadedFirmware:FirmwareFiles = new FirmwareFiles('','','','','');
    firmwareFormGroup:FormGroup;
    color = 'primary';
    mode = 'determinate';
    value:number = 0;
    bufferValue :number= 100;
    hideProgress:boolean = true;
    enableOpacity:boolean = false;
    constructor(private firmwareService:FirmwareService){
        this.createForm();
    }

    createForm(){
        this.firmwareFormGroup = new FormGroup({
            filename:new FormControl(this.uploadedFirmware.filename,[Validators.required]),
            type:new FormControl(this.uploadedFirmware.type,[Validators.required]),
            version:new FormControl(this.uploadedFirmware.model,[Validators.required]),
            model:new FormControl(this.uploadedFirmware.model,[Validators.required])
        })
    }
    onFileUpload(event){
        this.uploadedFile = <File>event.target.files[0];
        this.firmwareFormGroup.setValue({
            filename:this.uploadedFile.name,
            type:this.uploadedFile.type,
            version:'',
            model:''
        })

    }

    uploadFirmware(){
        this.hideProgress = false;
        this.enableOpacity = true;
        this.uploadedFirmware.md5sum = "";
        this.value = 0;
        this.firmwareService.uploadFile(this.uploadedFile,this.uploadedFirmware).subscribe(event =>{
            if(event.type === HttpEventType.UploadProgress){
                this.value = Math.round(event.loaded/event.total *100);
                console.log("upload progress " +Math.round(event.loaded/event.total *100) + '%');
            }
            else if(event.type === HttpEventType.Response){
                console.log(event.body);
                this.hideProgress = true;
                this.enableOpacity = false;
            }
        })
        /*this.firmwareService.uploadFirmware(this.uploadedFirmware).subscribe(res =>{
            console.log(res);
            this.firmwareService.uploadFile(this.uploadedFile,this.uploadedFirmware).subscribe(event =>{
                if(event.type === HttpEventType.UploadProgress){
                    this.value = Math.round(event.loaded/event.total *100);
                    console.log("upload progress " +Math.round(event.loaded/event.total *100) + '%');
                }
                else if(event.type === HttpEventType.Response){
                    console.log(event.body);
                    this.hideProgress = true;
                    this.enableOpacity = false;
                }
            })
        });*/

    }
    ngOnInit(){
        
    }
}