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

@NgModule({
    imports:[FirmwareRoutesModule,FormsModule,ReactiveFormsModule,
    MatCardModule,MatInputModule,MatButtonModule,MatFormFieldModule,FlexLayoutModule],
    declarations:[NewposDevicesComponent,SaralDevicesComponent],
    exports:[],
    entryComponents:[]
})
export class FirmwareModule{}