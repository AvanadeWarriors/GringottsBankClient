import { Transaction } from './../../models/transaction.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  URL_API = environment.URL_API;

  constructor(private http: HttpClient) { }

  createTransaction(transaction: Transaction) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.URL_API + '/account/transaction', JSON.stringify(transaction), { headers: headers });
  }

}

