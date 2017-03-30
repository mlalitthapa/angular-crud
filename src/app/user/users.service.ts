import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "./user";

@Injectable()
export class UsersService {

    private _url = 'https://jsonplaceholder.typicode.com/users';

    constructor(private _http: Http) {
    }

    getUsers() {

        return this._http.get(this._url)
            .map(res => res.json());

    }

    save(user: User, id: number) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        if (id) {
            return this._http.put(this._url + '/' + id, user, options)
                .map(response => response.json());
        }
        return this._http.post(this._url, user, options)
            .map(response => response.json());
    }

    getUser(id: number) {
        return this._http.get(this._url + '/' + id)
            .map(user => user.json());
    }

    delete(id: number) {
        return this._http.delete(this._url + '/' + id)
            .map(response => response.json());
    }

}