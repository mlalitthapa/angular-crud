import {Component, OnInit} from '@angular/core';

import {UsersService} from './users.service';

@Component({
    templateUrl: 'app/user/users.template.html',
    providers: [UsersService]
})
export class UsersComponent implements OnInit {

    isLoading = true;
    users: any;

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe(users => {
                this.isLoading = false;
                this.users = users;
            });
    }

}