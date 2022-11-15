import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpoyerLoginPage } from './empoyer-login.page';

const routes: Routes = [
  {
    path: '',
    component: EmpoyerLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpoyerLoginPageRoutingModule {}
