import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
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
      }
    ]
  }
]
@NgModule({
  imports:[RouterModule.forRoot(appRoutes/*,{enableTracing:true}*/)],
  declarations:[],
  providers:[],
  exports:[RouterModule]
})
export class AppRoutingModule{}
