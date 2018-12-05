import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, shareReplay, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiRoot = 'http://localhost:3000';
  private URL_API = 'https://api-gringottsbanks.ddns.net';
  usuarioLogado = new EventEmitter<boolean>();


  constructor(private http: HttpClient) { }


  private setSession(authResult) {

    const token = authResult.token;
    const user = authResult.data;

    const payload = <JWTPayload>jwtDecode(token);
    const expiresAt = moment.unix(payload.exp);

    localStorage.setItem('token', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));

    // this.usuario = user;


  }

  get token(): string {
    return localStorage.getItem('token');
  }

  login(cpf: string, password: string): Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const userLogin = { cpf, password };

    return this.http.post(`${this.URL_API}/customer/auth`, JSON.stringify(userLogin), { headers: headers })
        .pipe(
            map(response => {
                this.setSession(response);
                this.usuarioLogado.emit(true);
            })
        );
  }



  logout() {
    console.log('Deslogando');
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('currentUser');
    this.usuarioLogado.emit(false);
  }

  refreshToken() {
    if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
      return this.http.post(
        this.apiRoot.concat('refresh-token/'),
        { access_token: this.token }
      ).pipe(
        tap(response => this.setSession(response)),
        shareReplay(),
      ).subscribe();
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}


