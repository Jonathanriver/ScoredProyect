import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterProyectPageRoutingModule } from './register-proyect-routing.module';

import { RegisterProyectPage } from './register-proyect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterProyectPageRoutingModule
  ],
  declarations: [RegisterProyectPage]
})
export class RegisterProyectPageModule {}
