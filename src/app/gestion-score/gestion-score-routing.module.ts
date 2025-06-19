import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionScorePage } from './gestion-score.page';

const routes: Routes = [
  {
    path: '',
    component: GestionScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionScorePageRoutingModule {}
