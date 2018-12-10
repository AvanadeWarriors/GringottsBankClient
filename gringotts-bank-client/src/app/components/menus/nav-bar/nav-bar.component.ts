import { LoginService } from './../../../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuarioLogado = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.isLogged();
    console.log(this.usuarioLogado);

    this.loginService.usuarioLogado.subscribe(response => this.usuarioLogado = response);

  }

  isLogged() {
    this.usuarioLogado  = this.loginService.isLoggedIn();
  }



}
