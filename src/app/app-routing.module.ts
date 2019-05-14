import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './page/employees/employees.component';
import { UserLoginComponent } from './page/user-login/user-login.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { ResetPassComponent } from './page/reset-pass/reset-pass.component';
import { VerifyEmailComponent } from './page/verify-email/verify-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-login',
    pathMatch: 'full'
  },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'reset-pass', component: ResetPassComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
