import {Component,OnInit,Output,EventEmitter} from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl,ValidatorFn,AbstractControl} from '@angular/forms';
import {Users} from '../models/Users';
import {UsersPageComponent} from '../users/users-page.component';
@Component({
  selector:'login-form',
  templateUrl:'./login-form.component.html',
  styleUrls:['./login.component.css']
})
export class LoginFormComponent implements OnInit{
  @Output() loadRegistrationPage = new EventEmitter<number>()
   userForm:FormGroup;
   user:Users = new Users(0,'alexi','alex','smith','alixsmith@newLogic.io','password@private');
    constructor(private fb:FormBuilder,private usersPageComponent:UsersPageComponent){
      this.createForm();
    }
    createForm(){
      this.userForm = new FormGroup({
        'username':new FormControl(this.user.username,[Validators.required,Validators.minLength(4),regexValidator(/[0-9*&^%$$£'"?>:@<;]/)]),
        'password':new FormControl(this.user.password,[Validators.required,Validators.minLength(8)])
      /*  'username':['',[Validators.required,Validators.minLength(4)/*,regexValidator(/[a-zA-Z]/,'numbers/special characters not allowed')]],
        'password':['',[Validators.required,Validators.minLength(8)]]*/
      });
    }
    ngOnInit(){
      //this.createForm();
    }

    login(){
      console.log("Logged in successfully");
    }

    get diagnostic(){
      return JSON.stringify(this.userForm.status);
    }
    get getUser(){
      return JSON.stringify(this.user);
    }

    requestRegistration(){
      console.log('Registration request...');
      this.loadRegistrationPage.emit(2);
      this.usersPageComponent.loadRequestedComponent(1);
    }
}
export function regexValidator(passwordPattern:RegExp):ValidatorFn{
  return (control:AbstractControl):{[key:string]:any} =>{
    const validPass = passwordPattern.test(control.value);
    console.log("Password status::",validPass);
    console.log(">>>", validPass ?  {'invalidPassword':{value:control.value}} :null);
    return validPass ?  {'invalidPassword':{value:control.value}} :null;
  }
}
