import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable()
export class DialogService{
    confirm(message:string){
        const confirmation = window.confirm(message || 'Is it ok?');
        return of(confirmation);
    }

    alert(message:string){
        window.alert(message || 'changes will be discarded');
    }
}