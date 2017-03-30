/**
 * Created by lalit on 3/30/17.
 */
import {CanDeactivate} from '@angular/router';
import {AddUserComponent} from './add-user.component';
import {Injectable} from '@angular/core';

@Injectable()
export class UserFormGuard implements CanDeactivate<AddUserComponent> {

    canDeactivate(component: AddUserComponent) {
        if (component.hasChanges()) {
            return confirm('This form has some unsaved changes. Do you want to navigate?');
        }
        return true;
    }

}
