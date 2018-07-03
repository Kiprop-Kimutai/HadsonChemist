import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public lineChartData:Array<any> = [
    {data: [1.1.0, 1.2.0, 1.2.5, 2.0.0, 2.5.0, 2.5.0, 2.5.0], label: 'SARAL INFO'},
    {data: [1.1.0, 1.1.0, 1.2.0, 1.2.5, 1.2.5, 2.0.0, 2.1.0], label: 'NEWPOS 9220'}];
  public lineChartLabels:Array<any> = ['1.0.0', '1.1.0', '1.2.0', '1.3.0', '1.3.1', '1.3.2', '1.3.4'];
  public lineChartOptions:any = {
   responsive: true
 };
 public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
public lineChartType:string = 'line';

//pie chart
public pieChartLabels:string[] = ['SARAL INFO', 'NEWPOS 9220'];
public pieChartData:number[] = [30, 500];
public pieChartType:string = 'pie';

//bar-line chart
public lineChartBarData:Array<any> = [
    {data:[5, 5, 15, 10, 10, 5, 10],label:'SARAL INFO'},
    {data:[0, 2, 2, 2, 5, 27, 40],label:'NEWPOS 9220'}
  ];
  public lineChartBarLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartBarType:string = 'line';
  public pieChartType:string = 'pie';

  chartClicked(e:any){
    console.log(e);
    this.lineChartBarType = this.lineChartBarType === 'line' ? 'bar' :'line';
  }
  ngOnInit() {
  }

}
