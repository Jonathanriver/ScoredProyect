import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprobedProyectPageRoutingModule } from './aprobed-proyect-routing.module';

import { AprobedProyectPage } from './aprobed-proyect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprobedProyectPageRoutingModule
  ],
  declarations: [AprobedProyectPage]
})
export class AprobedProyectPageModule {}
