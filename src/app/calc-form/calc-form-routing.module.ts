import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcFormPage } from './calc-form.page';

const routes: Routes = [
  {
    path: '',
    component: CalcFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcFormPageRoutingModule {}
