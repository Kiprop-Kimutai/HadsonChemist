import {Component,OnInit,ElementRef,ViewChild} from '@angular/core';
import {DeviceFirmware} from '../../models/device-firmware';
import {FirmwareFiles} from '../../models/firmware_files';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
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
    constructor(private fb:FormBuilder){
        this.createForm();
    }
    createForm(){
        this.firmwareFormGroup = new FormGroup({
            filename:new FormControl('',[Validators.required]),
            type:new FormControl('',[Validators.required]),
            version:new FormControl('',[Validators.required]),
            model:new FormControl('',[Validators.required])

        })
    }

    clearFile(){
        this.firmwareFormGroup.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = "";
    }
    uploadFile(){
        console.log("Will upload file");
        console.log(this.firmwareFormGroup.value);
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
            this.uploadedFirmware.checksum = reader.result.split(',')[1];
        }
               /* this.firmwareFormGroup.get('avatar').setValue({
                    filename:file.name,
                    fileType:file.type,
                    checksum:reader.result.split(',')[1]
                })*/
       
    }
    ngOnInit(){

    }
}