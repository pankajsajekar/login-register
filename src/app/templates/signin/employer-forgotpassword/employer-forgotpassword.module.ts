import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployerForgotpasswordPageRoutingModule } from './employer-forgotpassword-routing.module';

import { EmployerForgotpasswordPage } from './employer-forgotpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployerForgotpasswordPageRoutingModule
  ],
  declarations: [EmployerForgotpasswordPage]
})
export class EmployerForgotpasswordPageModule {}
