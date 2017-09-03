import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from './user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  userUrl = 'http://localhost:8080/ExpenseManager/User';

  private createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic emJyYXZlOm0xMjM=');
  }

  getUsers(): Observable<User[]> {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    const requestOptions = new RequestOptions({headers: headers});
    return this.http.get(this.userUrl, requestOptions)
      .map((response: Response) => <User[]>response.json())
      .do(data => console.log('Users listed.'))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error() || 'Server error.!');
  }
}
