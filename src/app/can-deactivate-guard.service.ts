import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CanDeactivate} from '@angular/router';

export interface canComponentDeactivate{
    canDeactivate:() => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<canComponentDeactivate>{
    canDeactivate(component:canComponentDeactivate){
        return component.canDeactivate ? component.canDeactivate() :true;
    }
}