import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpoyerRegisterPage } from './empoyer-register.page';

const routes: Routes = [
  {
    path: '',
    component: EmpoyerRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpoyerRegisterPageRoutingModule {}
