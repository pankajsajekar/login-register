import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployerForgotpasswordPage } from './employer-forgotpassword.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerForgotpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployerForgotpasswordPageRoutingModule {}
