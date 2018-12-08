import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Transaction } from '../../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  URL_API = environment.URL_API;

  constructor(private http: HttpClient) { }

  getStatements(numberAccount: string, filter: string) {
    return this.http.get<any>(this.URL_API + '/account/statement/' + numberAccount + '/' + filter);
  }

  getStatementInput(numberAccount: string, filter: string) {
    return this.http.get<any>(this.URL_API + '/account/statement/input' + numberAccount + '/' + filter);
  }

  getStatementOutput(numberAccount: string, filter: string) {
    return this.http.get<any>(this.URL_API + '/account/statement/output' + numberAccount + '/' + filter);
  }
}
