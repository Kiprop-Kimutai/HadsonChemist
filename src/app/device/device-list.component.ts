import {Component,OnInit,Pipe,PipeTransform,ViewChild} from '@angular/core';
import {DeviceService} from './device.service';
import {FilterDevicess} from './filterDevices';
import {Device} from '../models/device';
import {Observable,of} from 'rxjs';
import {MatTableDataSource,PageEvent,MatDialog} from '@angular/material';
import {filter,map} from 'rxjs/operators';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {DeviceDialog} from './device-dialog';
import {DialogService} from '../dialog.service';

@Component({
    templateUrl:'device-list.component.html',
    styleUrls:['./device.component.css'],
    providers:[FilterDevicess]
})
export class DeviceListComponent implements OnInit{
  pageEvent:PageEvent;
  renderDevices:Device[];
  paginatedDevices:Device[];
  placeholderDevices:Device[];
  dataSource:MatTableDataSource<Device>;
  dataLength:number;
  pageSize:number;
  displayedColumns:string[];
  pageIndex:number = 0;

  

  constructor(private deviceService:DeviceService,private filterDevicess:FilterDevicess,
  private route:ActivatedRoute,private router:Router,private dialog:MatDialog,private dialogService:DialogService){}
  ngOnInit(){
    const devicess = this.fetchDevices();
    this.dataSource = new MatTableDataSource(devicess);
    this.displayedColumns = ['id','macaddress','serialno','model','kernel','firmware','active'];
    this.pageSize = 10;
  }
  fetchDevices():Device[]{
    this.deviceService.fetchDevices().subscribe(data => {this.renderDevices = data;this.paginatedDevices = data;placeholderDevices = data;console.log("Length::"+this.renderDevices.length);this.dataLength = this.renderDevices.length;});
    console.log(this.renderDevices);
    console.log("copy of devices::");
    return this.renderDevices;
  }

  filterDevices(text:string){
    console.log("FIlter init...");
    queryStrings = text;
    this.filterDevicess.setGlobalParams(this.renderDevices,text);
    //this.renderDevices = placeholderDevices.filter(this.filterD);
    this.renderDevices = placeholderDevices.filter(this.filterDevicess.filterDevices);

  }

  filterD(device:Device){
    console.log(queryStrings);
    var patt = new RegExp(queryStrings,"i");
    if(patt.test(""+device.id) || patt.test(device.macaddress) || patt.test(device.serialno) || patt.test(device.model) || patt.test(device.kernel) || patt.test(device.firmware) || patt.test(""+device.active)){
      return device;
    }
  }

  paginateValues(pageSize:number,pageIndex:number){
    this.renderDevices = <Device[]>paginatorFunction(this.paginatedDevices,pageSize,pageIndex);
  }

  navigateToDevice(id:number){
    console.log("click.."+id);
    this.router.navigate(['/layout/devices/device-list',id]);
  }

  addNewDevice(){
    console.log("Add new device");
    const dialogRef = this.dialog.open(DeviceDialog,{
      height:"100",
      width:"100",
      data:{

      }
    })
    dialogRef.afterClosed().subscribe(result =>{
      console.log("Dialog ref closed");
      console.log(result);
    })
    dialogRef.backdropClick().subscribe(data =>{
     this.dialogService.alert("");
    });
  }
  logName(){
    console.log("Jonah Hexx");
  }

}

export function paginatorFunction(arrayELement:Array<any>,number_of_elements:number,begin_index:number):Array<any>{
  let pageno:number = Math.ceil(arrayELement.length/number_of_elements);
  console.log(arrayELement.slice((begin_index*number_of_elements),number_of_elements));
  if(begin_index == 0){
    return arrayELement.slice((begin_index*number_of_elements),number_of_elements);
  }
  return arrayELement.slice((begin_index*number_of_elements),number_of_elements+(pageno*number_of_elements));
}

var queryStrings = "";
var placeholderDevices:Array<Device>;
