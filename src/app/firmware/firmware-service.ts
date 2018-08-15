import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders,HttpEvent} from '@angular/common/http';
import {FirmwareFiles} from '../models/firmware_files';
@Injectable()
export class FirmwareService{
    constructor(private http:HttpClient){

    }

    uploadFirmware(firmware:FirmwareFiles){
        let httpHeaders =new HttpHeaders({'Content-Type':'application/json'})
        //return this.http.post('/api/uploadFiles',firmware,{headers:httpHeaders});
        //return this.http.post('http://localhost:3000/api/uploadFiles',firmware,{headers:httpHeaders});
        return this.http.post('http://localhost:3000/firmware',firmware,{headers:httpHeaders});

 }

 uploadFile(file:File,firmware:FirmwareFiles){
     const formData:any = new FormData();
     formData.append("uploads[]",file,file.name)
     //formData.append("jonah","kiprop");
     ///formData.append("details",firmware);
     for(let key in firmware){
        console.log(key);
        formData.append(key,firmware[key]);
     }
     let httpHeaders = new HttpHeaders({/*'Content-Type':'multipart/form-data'*/});
     //return this.http.post('http://localhost:3000/api/uploadfirmware',formData,{headers:httpHeaders,reportProgress:true,observe:'events'});
     //return this.http.post('http://localhost:3000/uploadFile',formData,{headers:httpHeaders,reportProgress:true,observe:'events'});
     return this.http.post('http://localhost:2000/api/firmware_routes/uploadFile',formData,{headers:httpHeaders,reportProgress:true,observe:'events'});

 }
}