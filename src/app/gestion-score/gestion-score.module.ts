import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionScorePageRoutingModule } from './gestion-score-routing.module';

import { GestionScorePage } from './gestion-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionScorePageRoutingModule
  ],
  declarations: [GestionScorePage]
})
export class GestionScorePageModule {}
