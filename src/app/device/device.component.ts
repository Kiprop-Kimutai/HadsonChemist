import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap,Router} from '@angular/router';
import {DeviceService} from './device.service';
import{Device} from '../models/Device';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  device$:Device;
  constructor(private route:ActivatedRoute,private router:Router,private deviceService:DeviceService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    console.log("id..."+id);
     this.deviceService.fetchDeviceById(id).subscribe(data =>{console.log(data);this.device$ = data});
  }

}
