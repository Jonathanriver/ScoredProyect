import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprobedProyectPage } from './aprobed-proyect.page';

const routes: Routes = [
  {
    path: '',
    component: AprobedProyectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprobedProyectPageRoutingModule {}
