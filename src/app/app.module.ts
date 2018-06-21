import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {PageDirective} from './common/PageDirective';
import {UsersPageComponent} from './users/users-page.component';
import {UserFormService} from './users/user-forms.service';
import {LoginFormComponent} from './login/login-form.component';
import {RegisterFormComponent} from './login/register-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersPageComponent,
    LayoutComponent,
    LoginFormComponent,
    RegisterFormComponent,
    PageDirective
  ],
  imports: [
    BrowserModule,CommonModule,BrowserAnimationsModule,AppRoutingModule,ReactiveFormsModule,MatCardModule,
    MatInputModule,MatButtonModule
  ],
  providers: [UserFormService],
  entryComponents:[LoginFormComponent,RegisterFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
