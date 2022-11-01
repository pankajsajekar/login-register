import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResendpasswordemailPage } from './resendpasswordemail.page';

const routes: Routes = [
  {
    path: '',
    component: ResendpasswordemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResendpasswordemailPageRoutingModule {}
