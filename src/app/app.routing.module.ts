import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DeviceListComponent} from './device/device-list.component';
import {DeviceComponent} from './device/device.component';
import {PageNotFoundComponent} from './page-not-found.component';
const appRoutes:Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'layout',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'devices',
        component:DeviceListComponent
      },
      {
        path:'device/:id',
        component:DeviceComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]
@NgModule({
  imports:[RouterModule.forRoot(appRoutes/*,{enableTracing:true}*/)],
  declarations:[],
  providers:[],
  exports:[RouterModule]
})
export class AppRoutingModule{}
