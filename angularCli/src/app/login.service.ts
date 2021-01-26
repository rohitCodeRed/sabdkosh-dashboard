import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';



@Injectable()
export class AuthenticationService {
    loginUrl: string = environment.serverUrl + '/api/logged/loggedIn';
    logoutUrl:string = environment.serverUrl + '/api/logged/loggedOut';
    //_headers =

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(this.loginUrl, { username: username, password: password });
        // .map(user => {
        //         // login successful if there's a jwt token in the response
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }

        //         return user;
        //     });
    }

    logout() {
        let curentUser = JSON.parse(localStorage.getItem('currentUser'));
        let res = 'token '+curentUser.token;
        const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json','Authorization':res})};

        return this.http.get<any>(this.logoutUrl,httpOptions);

    }

}
