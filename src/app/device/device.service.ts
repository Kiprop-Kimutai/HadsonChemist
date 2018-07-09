import {Injectable} from '@angular/core';
import {Device} from '../models/device';
import {Observable,of} from 'rxjs';
import {tap,delay, map} from 'rxjs/operators';
@Injectable()
export class DeviceService{

    fetchDevices():Observable<Device[]>{
      return of(devices).pipe(delay(0));
    }
    fetchDeviceById(id:number |string){
      return this.fetchDevices().pipe(map(devices =>devices.find(device =>device.id === +id)));
    }
    addNewDevice(device:Device){
      device.id = devices[devices.length -1].id+1;
      console.log("Assigned ID::<<%d>>"+device.id)
        devices.push(device);
    }
}
 const  devices:Device[] = [
  new Device(1,"00:25:7E:03:54",'123432ftp','NewPOS 8210','1.2.3-aa','2.3.0',true),
  new Device(2,"00:25:7E:03:44",'855782cd1','NewPOS 8210','1.1.3-aa','1.1.4',false),
  new Device(3,"8fcbdg45",'76873pc','Saral Info','4.6 Jelly Bean','1.1.0',true),
  new Device(4,'9f6b4d72f','8cg4230pci','NewPOS 9220','6.0 Marsh Mallow','1.1.0',true)
]

