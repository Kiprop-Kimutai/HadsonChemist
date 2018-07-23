import {NgModule} from '@angular/core';
import {AuthService} from './login/auth.service';
import {MenuService} from './layout/menu-service';
import {DeviceService} from './device/device.service';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
@NgModule({
  providers:[AuthService,MenuService,DeviceService,AuthGuardService,CanDeactivateGuard,CanDeactivateGuard]
})
export class ServiceModule{}
