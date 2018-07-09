import {NgModule} from '@angular/core';
import {AuthService} from './login/auth.service';
import {MenuService} from './layout/menu-service';
import {DeviceService} from './device/device.service';
@NgModule({
  providers:[AuthService,MenuService,DeviceService]
})
export class ServiceModule{}
