import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionProyectosPageRoutingModule } from './gestion-proyectos-routing.module';

import { GestionProyectosPage } from './gestion-proyectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionProyectosPageRoutingModule
  ],
  declarations: [GestionProyectosPage]
})
export class GestionProyectosPageModule {}
