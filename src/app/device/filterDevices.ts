import {Component,OnInit} from '@angular/core';
import {Device} from '../models/Device';
@Component({
    selector:'filter-devices',
    template:``
})
export class FilterDevicess implements OnInit{
     public query:string = "";
     public testString = "Jonah";
     public devices:Device[];
    filterDevices(device:Device){
        let patt = new RegExp(queryString,"i");
        if(patt.test(""+device.id) || patt.test(device.macaddress) || patt.test(device.serialno) || patt.test(device.model) || patt.test(device.kernel) || patt.test(device.firmware) || patt.test(""+device.active)){
            return device;
          }
    }

    filter(){
         return this.devices.filter(this.filterDevices);
    }
    setGlobalParams(devices:Device[],query:string){
        placeholderDevices = devices;
        queryString = query;
    }
    test(query:string,devices:Device[]){
        console.log("Testing...");
        placeholderDevices = devices;

        this.query = query;
        console.log(this.query);
        this.devices = devices;
        
        //filter devices here
        devices.filter(this.filterDevices);
    }
    ngOnInit(){
    }
}
var placeholderDevices:Array<Device>;
var queryString:string = ""