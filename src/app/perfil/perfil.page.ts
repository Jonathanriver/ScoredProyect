import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false
})
export class PerfilPage implements OnInit {

  name = ''
  email = ''
  lastname = ''
  rol = ''
  phone = ''

  constructor(
  ) { }

  ngOnInit() {
    this.GetUserPerfil()
  }

  GetUserPerfil() {
    // Aquí puedes implementar la lógica para obtener el perfil del usuario
    let user: any = localStorage.getItem('user')
    let dataUser = JSON.parse(user)
    this.name = dataUser.name
    this.lastname = dataUser.lastname
    if(dataUser.rol == 1){
      this.rol = 'Administrador'
    }else if(dataUser.rol == 2){
      this.rol = 'Instructor'
    }else if(dataUser.rol == 3){
      this.rol = 'Coordinación'
    }else if(dataUser.rol == 4){
      this.rol = 'Directivo'
    }else if(dataUser.rol == 5){
      this.rol = 'Aprendiz'
    }
    console.log(this.rol);
    
    this.phone = dataUser.phone
    this.email = dataUser.email

    console.log(JSON.parse(user));


    // Por ejemplo, podrías llamar a un servicio que obtenga los datos del usuario
    console.log('Obteniendo perfil del usuario...');
  }

}
