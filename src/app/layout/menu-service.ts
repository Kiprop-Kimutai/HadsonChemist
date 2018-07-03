import {Injectable} from '@angular/core';
import {Menu} from '../models/menus';
import {Observable,of} from 'rxjs';
import {MENUS} from './mock-menus';
import {delay} from 'rxjs/operators';
@Injectable()
export class MenuService{
  fetchMenus():Observable<Menu[]>{
    return of(MENUS).pipe(delay(1000));
  }
}
