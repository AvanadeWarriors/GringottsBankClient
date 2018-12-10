import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './services/login/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StatementComponent } from './components/statement/statement.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'statement', component: StatementComponent, canActivate: [LoginGuard]  },
  { path: 'transfer', component: TransferComponent, canActivate: [LoginGuard]  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard]  },
  { path: 'create-account', component: CreateAccountComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
