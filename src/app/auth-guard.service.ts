import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router, ActivatedRoute} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './login/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authService:AuthService,private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        console.log("Auth guard allowed access");
        console.log(state.url);
        return this.checkLogin(state.url);
    }
    checkLogin(redirectUrl:string):boolean{
        console.log(redirectUrl);
        console.log(this.authService.isLoggedIn);
        if(this.authService.isLoggedIn){
            console.log("will return true");
            return true;
        }
        this.authService.redirectUrl = redirectUrl;
        this.router.navigate(['/login']);
        return false;
    }
}