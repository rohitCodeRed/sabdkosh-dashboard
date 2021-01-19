import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class RegisterService {
  registerUrl: string = environment.serverUrl + '/api/logged/register';
  constructor(private http: HttpClient) { }

  register(data) {
      return this.http.post<any>(this.registerUrl, data);
  }

}
