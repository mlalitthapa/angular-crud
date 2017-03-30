import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    private _url = 'https://jsonplaceholder.typicode.com/users'

    constructor(private _http: Http) {
    }

    getUsers() {

        return this._http.get(this._url)
            .map(res => res.json());

    }

    create(postData: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http.post(this._url, postData, options)
            .map(response => response.json());
    }
}