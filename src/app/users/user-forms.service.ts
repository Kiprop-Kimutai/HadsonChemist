import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ComponentItem} from '../common/ComponentItem';
import {LoginFormComponent} from '../login/login-form.component';
import {RegisterFormComponent} from '../login/register-form.component';
@Injectable()
export class UserFormService{
  //let userForms:ComponentItem[] = [new ComponentItem(LoginFormComponent),new ComponentItem(RegisterFormComponent)];
  fetchUserForms():ComponentItem[]{
  console.log('Userform service init..');
    return [new ComponentItem(LoginFormComponent),new ComponentItem(RegisterFormComponent)];
  }
}
