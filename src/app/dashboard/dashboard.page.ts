import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {


  show: any;

  constructor(
    public alertController: AlertController,
    public router: Router
  ) {
    let userData = localStorage.getItem('user');
    let rol

    if (userData == null || userData == undefined || userData == '') {
      this.presentAlert()
    } else {
      rol = JSON.parse(userData)
      if (rol.rol == 1) {
        this.show = true;
      } else if (rol.rol == 2) {
        this.show = true
      } else if (rol.rol == 3) {
        this.show = true
      } else {
        this.show = false
      }

    }
  }

  ngOnInit() {

  }

  Salir() {
    localStorage.clear()
    this.router.navigateByUrl('/login');
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Mensaje del sistema',
      message: 'Usuario inexistente por favor inicie sesion para poder continuar con este contenido.',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.router.navigateByUrl('/login'); // Redirige al usuario a la página de inicio de sesión
        }
      }]
    });

    await alert.present();
  }


  GestionProyectos() {
    this.router.navigateByUrl('gestion-proyectos');
  }

}
