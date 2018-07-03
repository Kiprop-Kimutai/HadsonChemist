import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
@NgModule({
  imports:[MatToolbarModule,MatButtonModule,MatInputModule,MatCardModule,MatSidenavModule,MatTooltipModule,MatListModule],
  exports:[MatToolbarModule,MatButtonModule,MatInputModule,MatCardModule,MatSidenavModule,MatTooltipModule,MatListModule]
})
export class MaterialModule{}
