import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpoyerRegisterPageRoutingModule } from './empoyer-register-routing.module';

import { EmpoyerRegisterPage } from './empoyer-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpoyerRegisterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EmpoyerRegisterPage]
})
export class EmpoyerRegisterPageModule {}
