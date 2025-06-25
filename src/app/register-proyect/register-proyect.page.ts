import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-register-proyect',
  templateUrl: './register-proyect.page.html',
  styleUrls: ['./register-proyect.page.scss'],
  standalone: false
})
export class RegisterProyectPage implements OnInit {

  nombre: any;
  contexto: any;
  integrantes: any;
  estado: any;
  ficha: any;
  veedor: any = 1;
  calificacion: any;
  trimestre: any;
  tecnologiaBack: any;
  tecnologiaFront: any;


  constructor(
    private http: HttpClient,
    public router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  RegistrarProyecto() {

    // validacion de parametros
    const queryNombre = this.nombre;
    const queryContexto = this.contexto;
    const queryIntegrantes = this.integrantes;
    const queryEstado = this.estado;
    const queryFicha = this.ficha;
    const queryVeedor = this.veedor;
    const queryCalificacion = this.calificacion; // Aunque no se usa, se puede asignar un valor por defecto
    const queryTrimestre = this.trimestre; // Asignar un valor por defecto o cambiar según la lógica de tu aplicación
    const queryTecnologiaFront = this.tecnologiaFront;
    const queryTecnoligiaBack = this.tecnologiaBack;


    // formulario del servicio post
    const bodyData = {
      nombre: this.nombre,
      contexto: this.contexto,
      integrantes: this.integrantes,
      estado: this.estado,
      ficha: this.ficha,
      veedor: this.veedor,
      calificacion: this.calificacion,
      trimestre: this.trimestre,
      tecnologiaBack: this.tecnologiaBack,
      tecnologiaFront: this.tecnologiaFront,
    };

    let params = new HttpParams();
    params = params.append('nombre', queryNombre);
    params = params.append('contexto', queryContexto);
    params = params.append('integrantes', queryIntegrantes);
    params = params.append('estado', queryEstado);
    params = params.append('ficha', queryFicha);
    params = params.append('veedor', queryVeedor);
    params = params.append('calificacion', 1);
    params = params.append('trimestre', queryTrimestre);
    params = params.append('tecnologiaFront', queryTecnologiaFront);
    params = params.append('tecnologiaBack', queryTecnoligiaBack);


    // Registrar proyecto
    this.http.post('http://127.0.0.1:8000/proyectos/create', bodyData, { params: params }).forEach((response: any) => {
      if (response) {
        localStorage.setItem('proyecto', JSON.stringify(bodyData));
        this.presentAlertExito();
      }

    });
    return true;
  }


  async presentAlertExito() {
    const alert = await this.alertController.create({
      header: 'Mensaje de Registro',
      subHeader: 'Registro exitoso',
      message: 'Proyecto registrado correctamente.',

      cssClass: 'alert-custom',
      backdropDismiss: false, // Evita que se cierre al hacer clic fuera del alert
      animated: true, // Habilita animaciones
      mode: 'ios', // Establece el modo a iOS  
      translucent: true, // Hace que el fondo sea translúcido
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.router.navigateByUrl('/gestion-proyectos'); // Redirige al usuario a la página de inicio de sesión
        }
      }]
    });

    await alert.present();
  }


  async presentAlertError(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje de Registro',
      subHeader: 'Registro fallido',
      message: message,

      cssClass: 'alert-custom',
      backdropDismiss: false, // Evita que se cierre al hacer clic fuera del alert
      animated: true, // Habilita animaciones
      mode: 'ios', // Establece el modo a iOS  
      translucent: true, // Hace que el fondo sea translúcido
      buttons: [{
        text: 'Aceptar'
      }]
    });

    await alert.present();
  }



}
