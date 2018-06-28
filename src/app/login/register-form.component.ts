import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators,ValidatorFn,AbstractControl} from '@angular/forms';
import {Users} from '../models/Users';
import {UsersPageComponent} from '../users/users-page.component';
@Component({
  templateUrl:'./registration-form.component.html',
  styleUrls:['./login.component.css','./required-labels.css']
})
export class RegisterFormComponent implements OnInit{

  registrationForm:FormGroup;
  modelUser:Users = new Users(10000000,'viking','robin','hood','robinhood@mashes.early','xxxx');
  passwordMatch:boolean = false;
  constructor(private usersPageComponent:UsersPageComponent){
    //this.createForm();
  }
  createForm(){
    this.registrationForm = new FormGroup({
      'firstname':new FormControl(this.modelUser.firstname,[Validators.required,Validators.minLength(2),regexValidator(/[0-9*&^%$$£'"?>:@<;]/)]),
      'lastname':new FormControl(this.modelUser.lastname,[Validators.required,Validators.minLength(2),regexValidator(/[0-9*&^%$$£'"?>:@<;]/)]),
      'username':new FormControl('',[Validators.required,Validators.minLength(2),regexValidator(/[0-9*&^%$$£'"?>:@<;]/)]),
      'email':new FormControl(this.modelUser.email,[Validators.required,Validators.email]),
      'password':new FormControl(this.modelUser.password,[Validators.required,Validators.minLength(8)]),
      'confirm_password':new FormControl('',[Validators.required])
    })
  }

 register(){

 }

onKey(event:KeyboardEvent){
  console.log((<HTMLInputElement>event.target).value);
}
 comparePasswords(repeatedPassword:string):void{
    console.log(repeatedPassword);
    this.passwordMatch = (repeatedPassword.trim() == this.modelUser.password ? true:false);
    console.log(this.passwordMatch);
 }
 requestLogin(){
   console.log('login requested')
    this.usersPageComponent.loadRequestedComponent(0);
 }
  ngOnInit(){
    this.createForm();
  }

}
export function regexValidator(forbiddenPattern:RegExp):ValidatorFn{
  return (control:AbstractControl):{[key:string]:any} =>{
    const invalidInput = forbiddenPattern.test(control.value);
    console.log("input status::",invalidInput);
    console.log(">>>", invalidInput ?  {'invalidPattern':{value:control.value}}:null);
    return invalidInput ?  {'invalidPattern':{value:control.value}} :null;
  }
}
