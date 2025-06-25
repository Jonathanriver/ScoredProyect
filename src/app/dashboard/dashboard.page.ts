import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  leng_proyect: number = 0;
  leng_proyects_terminate = 0;
  show: any;

  constructor(
    public alertController: AlertController,
    public http: HttpClient,
    public router: Router,
    private route: ActivatedRoute
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

  async ngOnInit() {
    await this.consulatProyect();
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


  consulatProyect() {
    this.http.get<any[]>('http://127.0.0.1:8000/proyectos')
      .subscribe(value => {
        this.leng_proyect = value.length;
        value.forEach(element => {
          if (element.estado == 1) {
            this.leng_proyects_terminate++;
          }
        });
      });
  }


  GestionProyectos() {
    this.router.navigateByUrl('gestion-proyectos');
  }


  GestionUsuarios() {
    this.router.navigateByUrl('gestion-usuarios');
  }

  GestionScore() {
    this.router.navigateByUrl('gestion-score');
  }

}
