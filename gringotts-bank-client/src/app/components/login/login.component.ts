import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;

  customer = new Customer();


  constructor(private loginService: LoginService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
  }



  // login(username: string, password: string) {
  //   console.log(username);
  //   this.loginService.login(username, password).subscribe(
  //     sucess => this.router.navigate(['/home']),
  //     error => this.error = error
  //   );
  // }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }

  login() {
    this.loginService.login(this.customer.cpf, this.customer.password).subscribe(
      sucess => {
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log(error.error.message);
        this.toastrService.error(error.error.message, '');
      }
    );
  }



}
