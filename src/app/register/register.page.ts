import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {

  name = '';
  lastname = '';
  phone = '';
  rol = '';
  email = '';
  password = '';
  confirmPassword = '';
  sesion: any;
  show: any;



  constructor(
    private http: HttpClient,
    public router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.sesion = localStorage.getItem('user')
    if (this.sesion) {
      let us = JSON.parse(this.sesion)

      if (us.name) {
        this.show = false
      } else {
        this.show = true
      }
    }else{
      this.show = true
    }


  }

  Register(): boolean {

    if (this.name == '') {
      this.presentAlertError(`El campo "Nombre" es obligatorio. Por favor, completa el campo e intenta nuevamente.`);
      return false;
    }
    if (this.lastname == '') {
      this.presentAlertError(`El campo "Apellido" es obligatorio. Por favor, completa el campo e intenta nuevamente.`);
      return false;
    }
    if (this.phone == '') {
      this.presentAlertError(`El campo "Teléfono" es obligatorio. Por favor, completa el campo e intenta nuevamente.`);
      return false;
    }
    if (this.email == '') {
      this.presentAlertError(`El campo "Email" es obligatorio. Por favor, completa el campo e intenta nuevamente.`);
      return false;
    }
    if (this.rol == '') {
      this.presentAlertError(`El campo "Rol" es obligatorio. Por favor, completa el campo e intenta nuevamente.`);
      return false;
    }
    if (this.password == '') {
      this.presentAlertError(`El campo "Password" es obligatorio. Por favor, completa el campo e intenta nuevamente.`);
      return false;
    }
    if (this.confirmPassword == '') {
      this.presentAlertError(`El campo "Confrimar el password" es obligatorio. Por favor, completa el campo e intenta nuevamente.`);
      return false;
    }


    const queryName = this.name;
    const queryLastname = this.lastname;
    const queryPhone = this.phone;
    const queryRol = this.rol;
    const queryEmail = this.email;
    const queryPassword = Md5.hashStr(this.password);

    const bodyData = {
      name: this.name,
      lastname: this.lastname,
      phone: this.phone,
      rol: this.rol,
      email: this.email,
      password: Md5.hashStr(this.password)

    };

    let params = new HttpParams();
    params = params.append('name', queryName);        // Añade el nombre como parámetro de consulta
    params = params.append('lastname', queryLastname); // Añade el apellido como parámetro de consulta
    params = params.append('phone', queryPhone);      // Añade el teléfono como parámetro de consulta
    params = params.append('rol', queryRol);          // Añade el rol como parámetro de consulta
    params = params.append('email', queryEmail);      // Añade el email como parámetro de consulta
    params = params.append('password', queryPassword); // Añade la contraseña como parámetro de consulta


    if (this.password === this.confirmPassword) {

      this.http.post('http://127.0.0.1:8000/user/create', bodyData, { params: params }).forEach((response: any) => {

        if (response) {
          debugger
          localStorage.setItem('user', JSON.stringify(bodyData));
          this.router.navigateByUrl('/dashboard');
        }
        this.presentAlertExito()

      });
      // Aquí puedes agregar la lógica para registrar al usuario
      return true;
    } else {
      this.presentAlertError('Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente.');
      return false;
    }
  }


  async presentAlertExito() {
    const alert = await this.alertController.create({
      header: 'Mensaje de Registro',
      subHeader: 'Registro exitoso',
      message: 'Usuario registrado correctamente.',

      cssClass: 'alert-custom',
      backdropDismiss: false, // Evita que se cierre al hacer clic fuera del alert
      animated: true, // Habilita animaciones
      mode: 'ios', // Establece el modo a iOS  
      translucent: true, // Hace que el fondo sea translúcido
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.router.navigateByUrl('/dashboard'); // Redirige al usuario a la página de inicio de sesión
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
