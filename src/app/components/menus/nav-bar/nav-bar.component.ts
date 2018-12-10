import { LoginService } from './../../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuarioLogado = false;

  constructor(
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.isLogged();
    this.loginService.usuarioLogado.subscribe(response => this.usuarioLogado = response);
  }

  isLogged() {
    this.usuarioLogado = this.loginService.isLoggedIn();
  }

  redirectTo(location: string) {
    this.router.navigateByUrl(location);
  }

  logout() {
    this.loginService.logout();
    this.redirectTo('/home');
  }
}
