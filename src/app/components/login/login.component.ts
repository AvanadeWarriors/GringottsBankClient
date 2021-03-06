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
       this.toastrService.error('Erro ao realizar login!');
      }
    );
  }



}
