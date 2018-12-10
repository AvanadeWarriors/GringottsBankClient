import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../services/account/account.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  viewAccount = false;
  viewInvestment = false;
  viewCreditCard = false;
  accountNumber: string;
  accountBalance: any[] = [];

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private accountService: AccountService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.accountNumber = JSON.parse(localStorage.getItem('currentUser')).accountNumber;
    this.getAccountBalance();
  }

  getAccountBalance() {
    this.accountService.getAccount(this.accountNumber)
      .subscribe(response => {
        this.accountBalance = response;
        console.log(this.accountBalance);
      });
  }

  changeView(view: boolean, nameView: string) {
    switch (nameView) {
      case 'viewAccount': {
        this.viewAccount = !view;
        break;
      } case 'viewCreditCard': {
        this.viewCreditCard = !view;
        break;
      } case 'viewInvestment': {
        this.viewInvestment = !view;
        break;
      }
    }
  }

  redirectTo(location: string) {
    this.router.navigateByUrl(location);
  }

  logout() {
    this.loginService.logout();
    this.redirectTo('/home');
  }
}
