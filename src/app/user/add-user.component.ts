import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CustomValidator} from './custom-validator';
import {UsersService} from './users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from './user';

@Component({
    templateUrl: 'app/user/add-user.template.html',
    providers: [UsersService]
})
export class AddUserComponent {

    registerForm: FormGroup;
    title: string;
    user = new User();
    id: number;

    name: any;
    email: any;
    phone: any;

    constructor(private fb: FormBuilder,
                private _userService: UsersService,
                private router: Router,
                private routeParams: ActivatedRoute) {
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

    ngOnInit() {
        this.id = this.routeParams.snapshot.params['id'];

        this.title = this.id ? 'Edit User' : 'Add User';

        if (!this.id) {
            return;
        }

        this._userService.getUser(this.id)
            .subscribe(
                user => {
                    this.user = user;
                },
                error => {
                    if (error.status === 404) {
                        this.router.navigate(['/users']);
                    }
                }
            );
    }

    saveUser() {
        this._userService.save(this.registerForm.value, this.id)
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