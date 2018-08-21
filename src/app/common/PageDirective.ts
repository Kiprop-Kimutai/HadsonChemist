import {Directive,ViewContainerRef} from '@angular/core';
@Directive({
  selector:'[page-host]'
})
export class PageDirective{
  constructor(public viewContainerRef:ViewContainerRef){}
  onLoadRegistrationPage(number){
    console.log("Parent call received");
  }
}
