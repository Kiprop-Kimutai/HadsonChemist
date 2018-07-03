import {Component,OnInit,Input} from '@angular/core';
import {Menu} from '../models/menus';
@Component({
  selector:'navlist-component',
  templateUrl:'./nav-list.component.html',
  styleUrls:['./layout.component.css']
})
export class NavListComponent implements OnInit{
  @Input() menu:Menu;
  showChildren:boolean = false;
  slidericon:string = 'caret_down';
  ngOnInit(){
      console.log("Destination menus");
      console.log(this.menu);
      console.log(this.menu);
  }

  showSubmenus(){
    this.showChildren = this.showChildren ? false:true;
    this.slidericon = this.slidericon === 'caret_down' ? 'caret_up':'caret_down';
  }
}
