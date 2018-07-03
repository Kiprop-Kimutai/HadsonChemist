import {SubMenus} from './submenus';
export class Menu{
  constructor(public name:string,public label:string,public icon:string,public type:string,public children?:SubMenus[]){

  }
}
