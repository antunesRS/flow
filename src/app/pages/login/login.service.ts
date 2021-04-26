/* eslint-disable @typescript-eslint/semi */
/* eslint-disable prefer-const */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/ban-types
  doLogin(email, password): Promise<Object>{
    let url = 'http://localhost:3000/auth'

    //let header = {
     // headers: new HttpHeaders().set('Content-Type', 'application/json')
    //}

    return this.http.post(url, {email, password}).toPromise()
  }
}
