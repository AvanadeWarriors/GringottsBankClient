import { StatementService } from './../../services/statement/statement.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  transactions: Transaction[];
  transactionsInput: Transaction[];
  transactionsOutput: Transaction[];
  accountNumber: string;
  filter: string;
  name: string;
  balance: number;

  constructor(private statementService: StatementService, private accountService: AccountService) { }

  ngOnInit() {
    this.accountNumber = JSON.parse(localStorage.getItem('currentUser')).accountNumber;
    this.name = JSON.parse(localStorage.getItem('currentUser')).name;
    this.filter = '10';
    this.getBalance();
    this.getStatements();
    this.getStatementInput();
    this.getStatementOutput();
  }

  getStatements() {
    this.statementService.getStatements(this.accountNumber, this.filter).subscribe(
      success => {
        this.transactions = success.accountStatement;
      }
    );
  }

  getStatementInput() {
    this.statementService.getStatementInput(this.accountNumber, this.filter).subscribe(
      success => {
        this.transactionsInput = success.accountStatementInput;
      }
    );
  }

  getStatementOutput() {
    this.statementService.getStatementOutput(this.accountNumber, this.filter).subscribe(
      success => {
        this.transactionsOutput = success.accountStatementOutput;
      }
    );
  }

  getBalance() {
    this.accountService.getAccount(this.accountNumber).subscribe(response => this.balance = response.accountBalance);
  }

}

