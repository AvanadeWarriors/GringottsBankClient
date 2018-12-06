import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transaction = new Transaction();

  constructor(private transactionService: TransactionService) { }
  ngOnInit() {
    this.transaction.transactionType = '1';
  }

  createTransaction() {
    this.transactionService.createTransaction(this.transaction).subscribe(response => {
      console.log(response);
    });
  }

  mostraValores() {
    console.log('Valores: ' + JSON.stringify(this.transaction));
  }

}
