import { Component, OnInit,OnDestroy,Input,ViewChild,ComponentFactoryResolver } from '@angular/core';
import {ComponentItem} from '../common/ComponentItem';
import {PageDirective} from '../common/PageDirective';
@Component({
  selector:'user-page',
    template:`
    <div>
    <ng-template page-host></ng-template>
    </div>
    `
})
export class UsersPageComponent implements OnInit,OnDestroy {
  @Input() userForms:ComponentItem[];
  @ViewChild(PageDirective) pageDirective:PageDirective;
  index:any
  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
    console.log("UserPageComponent init.....");
    this.index = 0;
    this.loadComponent();
  }
  ngOnDestroy(){
      this.index = 0;
  }
  loadComponent(){
    console.log("Loading component....");
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.userForms[this.index].component);
    let viewContainerRef = this.pageDirective.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
  }

  getNextComponent(){
    this.index = this.index+1;
    this.loadComponent();
  }
  loadRequestedComponent(index:number){
    console.log("Parent call received");
    this.index = index;
    this.loadComponent();
  }

}
