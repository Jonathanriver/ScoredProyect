import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionProyectosPage } from './gestion-proyectos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionProyectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProyectosPageRoutingModule {}
