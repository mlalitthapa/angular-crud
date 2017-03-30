import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CustomValidator} from './custom-validator';
import {UsersService} from './users.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'app/user/add-user.template.html',
    providers: [UsersService]
})
export class AddUserComponent {

    registerForm: FormGroup;

    name: any;
    email: any;
    phone: any;

    constructor(private fb: FormBuilder, private _userService: UsersService, private router: Router) {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', CustomValidator.email],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });

        this.name = this.registerForm.controls['name'];
        this.email = this.registerForm.controls['email'];
        this.phone = this.registerForm.controls['phone'];
    }

    createUser() {
        this._userService.create(this.registerForm.value)
            .subscribe(user => {
                    this.registerForm.markAsPristine();
                    this.router.navigate(['/users']);
                },
                error => {
                    alert('Something went wrong. Try again');
                });
    }

    hasChanges(): boolean {
        return this.registerForm.dirty;
    }

}