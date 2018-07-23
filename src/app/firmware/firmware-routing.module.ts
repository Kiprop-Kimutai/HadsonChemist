import {RouterModule,Routes, Router} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {SaralDevicesComponent} from './saral/saral-devices.component';
import {NewposDevicesComponent} from './newpos/newpos-devices.component';
const routes:Routes = [
    {
        path:'saral-firmware',
        component:SaralDevicesComponent
    },
    {
        path:'newpos-firmware',
        component:NewposDevicesComponent
    },
    {
        path:'',
        redirectTo:'saral-firmware',
        pathMatch:'full'
    }
]
export const FirmwareRoutesModule:ModuleWithProviders = RouterModule.forChild(routes);