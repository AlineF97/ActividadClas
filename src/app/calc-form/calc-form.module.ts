import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcFormPageRoutingModule } from './calc-form-routing.module';

import { CalcFormPage } from './calc-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CalcFormPageRoutingModule
  ],
  declarations: [CalcFormPage]
})
export class CalcFormPageModule {}
