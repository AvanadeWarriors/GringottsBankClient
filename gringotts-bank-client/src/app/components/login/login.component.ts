import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    error: any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }



  login(username: string, password: string) {
    this.loginService.login(username, password).subscribe(
      sucess => this.router.navigate(['/home']),
      error => this.error = error
    );
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }

}
