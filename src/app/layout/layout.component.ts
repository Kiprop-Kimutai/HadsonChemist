import {Component,OnInit} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {MenuService} from './menu-service';
import {Menu} from '../models/menus';
@Component({
  selector:'layout-component',
  templateUrl:'./layout.component.html',
  styleUrls:['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  sidenavMode:string = "";
  isSidenavOpened:boolean = true;
  loggedInuser:string = "";
  menus:Menu[];
  menu:Menu;
    constructor(private authService:AuthService,private menuService:MenuService){
    }
    ngOnInit(){
      this.loadSidenavProperties();
      this.loggedInuser = this.authService.loggedInuser;
      this.loadMenus();
    }

    loadSidenavProperties(){
      this.getScreenSize();
      this.sidenavMode = this.getScreenSize()<820 ? 'over':'side';
      this.isSidenavOpened = this.getScreenSize()<820 ? false:true;
    }
    getScreenSize():number{
      console.log(window.innerWidth);
      return window.innerWidth;
    }

    loadMenus(){
      this.menuService.fetchMenus().subscribe(data =>{this.menus = data;console.log(data)})
    }
}
