import {RouterModule,Routes, Router} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {SaralDevicesComponent} from './saral/saral-devices.component';
import {NewposDevicesComponent} from './newpos/newpos-devices.component';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
const routes:Routes = [
    {
        path:'saral-firmware',
        canDeactivate:[CanDeactivateGuard],
        component:SaralDevicesComponent
    },
    {
        path:'newpos-firmware',
        canDeactivate:[CanDeactivateGuard],
        component:NewposDevicesComponent
    },
    {
        path:'',
        canDeactivate:[CanDeactivateGuard],
        redirectTo:'saral-firmware',
        pathMatch:'full'
    }
]
export const FirmwareRoutesModule:ModuleWithProviders = RouterModule.forChild(routes);