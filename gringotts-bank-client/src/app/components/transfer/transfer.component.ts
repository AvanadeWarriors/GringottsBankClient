import { Account } from './../../models/account.model';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transaction = new Transaction();
  targetAccount = new Account();

  constructor(private transactionService: TransactionService, private toastrService: ToastrService) { }
  ngOnInit() {
    this.transaction.accountNumber = JSON.parse(localStorage.getItem('currentUser')).accountNumber;
    this.transaction.transactionType = '1';
  }

  createTransaction() {
    this.transactionService.createTransaction(this.transaction).subscribe(
      response => this.toastrService.success('Transação efetuada com sucesso!', ''),
      err => this.toastrService.error('Erro ao realizar transação verifique os campos')
    );
  }


  getAccount() {
    this.transactionService.getAccount(this.transaction).subscribe(response => {
      this.targetAccount = response.accountData;
      console.log(response.accountData);
    });
  }


  mostraValores() {
    console.log('Valores: ' + JSON.stringify(this.transaction));
  }

}
