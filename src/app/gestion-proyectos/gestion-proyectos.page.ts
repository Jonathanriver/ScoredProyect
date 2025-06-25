import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-proyectos',
  templateUrl: './gestion-proyectos.page.html',
  styleUrls: ['./gestion-proyectos.page.scss'],
  standalone: false
})
export class GestionProyectosPage implements OnInit {


  list_proyect: any[] = [];
  list_proyects_terminate: any[] = [];
  list_proyects_sin_terminate: any[] = [];
  leng_proyect: number = 0;
  leng_proyects_terminate = 0;

  constructor(
    public http: HttpClient,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.http.get<any[]>('http://127.0.0.1:8000/proyectos')
      .subscribe(value => {
        this.list_proyect = value;
        this.leng_proyect = value.length;
        value.forEach(element => {
          if (element.aprobado_status == 1) {
            this.leng_proyects_terminate++; 
            this.list_proyects_terminate.push(element);
          }else if (element.aprobado_status == 0) {
            this.list_proyects_sin_terminate.push(element);
          }
        });
      });
  }

  DetailProyect(id: any) {
    this.router.navigate(
      ['/detail-proyect'],
      { queryParams: { id: id } }
    )

  }


  RegistrarProyect() {
    this.router.navigateByUrl('/register-proyect')
  }
}
