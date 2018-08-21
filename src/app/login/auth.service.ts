import {Injectable} from '@angular/core';
import {Observable,of} from 'rxjs';
import {delay,tap} from 'rxjs/operators';

@Injectable()
export class AuthService{
  isLoggedIn:boolean = false;
  loggedInuser:string = '';
  redirectUrl:string = "";
    login(username:string,password:string):Observable<boolean>{
      console.log("Trying to login....");
      this.loggedInuser = username;
      //return Observable.of(true).pipe(delay(1000),tap(val=>isLoggedIn=true));
      return of(true).pipe(delay(100),tap(() => this.isLoggedIn =true));
    }

    logout():void{
      this.isLoggedIn = false;
    }

}
