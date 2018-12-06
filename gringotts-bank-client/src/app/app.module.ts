import { LoginInterceptor } from './services/login/login.interceptor';
import { LoginGuard } from './services/login/login.guard';
import { LoginService } from './services/login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideNavComponent } from './components/menus/side-nav/side-nav.component';
import { NavBarComponent } from './components/menus/nav-bar/nav-bar.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { StatementComponent } from './components/statement/statement.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FooterComponent } from './components/menus/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SideNavComponent,
    NavBarComponent,
    TransferComponent,
    StatementComponent,
    CreateAccountComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
