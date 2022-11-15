import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPage } from './signin.page';

const routes: Routes = [
  {
    path: '',
    component: SigninPage
  },
  {
    path: 'empoyer-login',
    loadChildren: () => import('./empoyer-login/empoyer-login.module').then( m => m.EmpoyerLoginPageModule)
  },
  {
    path: 'empoyer-register',
    loadChildren: () => import('./empoyer-register/empoyer-register.module').then( m => m.EmpoyerRegisterPageModule)
  },  {
    path: 'employer-forgotpassword',
    loadChildren: () => import('./employer-forgotpassword/employer-forgotpassword.module').then( m => m.EmployerForgotpasswordPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninPageRoutingModule {}
