import { Component, OnInit } from '@angular/core';

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
  veedor: any;

  constructor() { }

  ngOnInit() {
  }

   customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

}
