import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpoyerLoginPageRoutingModule } from './empoyer-login-routing.module';

import { EmpoyerLoginPage } from './empoyer-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpoyerLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EmpoyerLoginPage]
})
export class EmpoyerLoginPageModule {}
