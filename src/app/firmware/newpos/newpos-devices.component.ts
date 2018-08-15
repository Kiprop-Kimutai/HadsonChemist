import {Component,OnInit,ElementRef,ViewChild} from '@angular/core';
import {DeviceFirmware} from '../../models/device-firmware';
import {FirmwareFiles} from '../../models/firmware_files';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import {DialogService} from '../../dialog.service';
import {FirmwareService} from '../firmware-service';
@Component({
    selector:'newpos-devices',
    templateUrl:'./newpos-devices.component.html',
    styleUrls:['./newpos-devices.component.css']
})
export class NewposDevicesComponent implements OnInit{
    @ViewChild('fileInput') fileInput:ElementRef;
    uploadedFile:File = null;
    uploadedFirmware:FirmwareFiles = new FirmwareFiles('','','','','');
    firmwareFormGroup:FormGroup;
    constructor(private fb:FormBuilder,private dialogService:DialogService,private firmwareService:FirmwareService){
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

    clearFile(){
        this.firmwareFormGroup.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = "";
    }
    uploadFile(){
        console.log("Will upload file");
        //this.firmwareService.uploadFirmware(this.uploadedFirmware).subscribe(res =>{console.log(res)});
    }
    onFileUpload(event){
        let reader = new FileReader();
        console.log(event.target.files[0]);
        this.uploadedFile = <File>event.target.files[0];
        this.firmwareFormGroup.setValue({
            filename:this.uploadedFile.name,
            type:this.uploadedFile.type,
            version:'',
            model:''
        })
        reader.readAsDataURL(this.uploadedFile);
        reader.onload = () =>{
            console.log(reader.result.split(',')[1]);
            this.uploadedFirmware.md5sum = reader.result.split(',')[1];
        }
      
    }
    canDeactivate(){
        if(JSON.stringify(new FirmwareFiles('','','','','')) == JSON.stringify(this.uploadedFirmware)){
            return true;
        }
        return this.dialogService.confirm('Are you sure to discard?');
  
    }
    
    ngOnInit(){

    }
}