import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.page.html',
  styleUrls: ['./gestion-usuarios.page.scss'],
  standalone: false
})
export class GestionUsuariosPage implements OnInit {

  list_users: any[] = [];
  leng_users: number = 0;


  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {

    this.http.get<any[]>('http://127.0.0.1:8000/users')
      .subscribe(value => {
        this.list_users = value;
        this.leng_users = value.length;
      });

  }


  AgregarUsuarios(){
    this.router.navigateByUrl('register')
  }

}
