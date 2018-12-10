import { LoginInterceptor } from './services/login/login.interceptor';
import { LoginGuard } from './services/login/login.guard';
import { LoginService } from './services/login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
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
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { SliderComponent } from './components/slider/slider.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { SliderDirective } from './directive/slider.directive';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MatStepperModule } from '@angular/material/stepper';
import { CurrencyMaskModule } from 'ngx-currency-mask';
import { MatMenuModule } from '@angular/material/menu';

registerLocaleData(localePt);

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
    FooterComponent,
    SliderComponent,
    SliderDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    CommonModule,
    MatMenuModule,
    CurrencyMaskModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  entryComponents: [SliderComponent],
  providers: [
    LoginService,
    LoginGuard,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
 }
