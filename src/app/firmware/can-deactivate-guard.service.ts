import {Injectable} from '@angular/core';
import {CanDeactivate} from "@angular/router";
import {Observable} from 'rxjs';
export interface canDeactivateComponent{
    canDeactivate():Promise<boolean> | Observable<boolean> | boolean;

    
}
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<canDeactivateComponent> {

    canDeactivate(component:canDeactivateComponent):Promise<boolean> | Observable<boolean> |boolean{
        return component.canDeactivate ? component.canDeactivate() :true;
    }

}