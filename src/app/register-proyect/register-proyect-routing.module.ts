import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterProyectPage } from './register-proyect.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterProyectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterProyectPageRoutingModule {}
