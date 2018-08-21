import { Component, OnInit,OnDestroy,Input,ViewChild,ComponentFactoryResolver } from '@angular/core';
import {ComponentItem} from '../common/ComponentItem';
import {PageDirective} from '../common/PageDirective';
import {UserFormService} from '../users/user-forms.service';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Users} from '../models/Users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  userForms:ComponentItem[];
  userForm:FormGroup;
  user = new Users(1,'abcd','kean','roy','jonahkim','3455');
  constructor(private userFormService:UserFormService){

  }
  ngOnInit(){
    this.createForm();
    console.log('Login Component loading...');
    //console.log(this.userFormService.fetchUserForms());
    this.userForms =this.userFormService.fetchUserForms();
    console.log(this.userForms);

  }
  ngOnDestroy(){

  }
  createForm(){
    this.userForm = new FormGroup({
      'username':new FormControl(this.user.username,[Validators.required]),
      'password':new FormControl(this.user.password,[Validators.required])
    })
  }

}
