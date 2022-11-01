import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResendpasswordemailPageRoutingModule } from './resendpasswordemail-routing.module';

import { ResendpasswordemailPage } from './resendpasswordemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResendpasswordemailPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ResendpasswordemailPage]
})
export class ResendpasswordemailPageModule {}
