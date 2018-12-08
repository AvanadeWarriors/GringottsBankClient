import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  viewAccount = false;
  viewInvestment = false;
  viewCreditCard = false;

  constructor(
    private router: Router) { }

  ngOnInit() {
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

}
