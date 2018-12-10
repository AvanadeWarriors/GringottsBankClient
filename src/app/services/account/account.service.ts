import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Account } from '../../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  URL_API = environment.URL_API;
  urlGetBalance = '/account/balance/';

  constructor(private http: HttpClient) { }

  getAccount(accountId: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<any>(this.URL_API + this.urlGetBalance + accountId);
  }
}
