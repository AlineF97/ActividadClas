import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresadoGuard } from '../ingresado.guard';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'bienvenida',
        loadChildren: () => import('../bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule),
        canActivate: [IngresadoGuard]
      },
      {
        path: 'calculadora',
        loadChildren: () => import('../calculadora/calculadora.module').then( m => m.CalculadoraPageModule),
        canActivate: [IngresadoGuard]
      },
      {
        path: 'calc-form',
        loadChildren: () => import('../calc-form/calc-form.module').then( m => m.CalcFormPageModule),
        canActivate: [IngresadoGuard]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
