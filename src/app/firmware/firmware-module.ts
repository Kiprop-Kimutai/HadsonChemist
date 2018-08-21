import {NgModule} from '@angular/core';
import {FirmwareRoutesModule} from './firmware-routing.module';
import {NewposDevicesComponent} from './newpos/newpos-devices.component';
import {SaralDevicesComponent} from './saral/saral-devices.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {FirmwareService} from './firmware-service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CommonModule} from '@angular/common';
@NgModule({
    imports:[FirmwareRoutesModule,FormsModule,ReactiveFormsModule,
    MatCardModule,MatInputModule,MatButtonModule,MatFormFieldModule,FlexLayoutModule,
    MatProgressBarModule,CommonModule],
    declarations:[NewposDevicesComponent,SaralDevicesComponent],
    exports:[],
    entryComponents:[],
    providers:[CanDeactivateGuard,FirmwareService]
})
export class FirmwareModule{}