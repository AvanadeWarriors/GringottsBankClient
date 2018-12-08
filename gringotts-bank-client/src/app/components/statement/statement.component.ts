import { StatementService } from './../../services/statement/statement.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {


  transactions: Transaction[];
  accountNumber: string;
  filter: string;

  constructor(private statementService: StatementService) { }

  ngOnInit() {
  }

  getStatements() {
    this.statementService.getStatements(this.accountNumber, this.filter).subscribe(
      success => {
        this.transactions = success.accountStatement;
        console.log(this.transactions);
      }
    );
  }

  getStatementInput() {
    this.statementService.getStatementInput(this.accountNumber, this.filter).subscribe(
      success => {
        this.transactions = success.accountStatementInput;
      }
    );
  }

  getStatementOutput() {
    this.statementService.getStatementOutput(this.accountNumber, this.filter).subscribe(
      success => {
        this.transactions = success.accountStatementOutput;
      }
    );
  }

}

