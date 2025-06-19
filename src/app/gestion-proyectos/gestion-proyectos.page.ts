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
  leng_proyect: number = 0;

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
        console.log(this.list_proyect);


      });
  }

  DetailProyect(id: any) {
   this.router.navigate(
    ['/detail-proyect'],
    {queryParams: {id: id}}
   )

  }


  RegistrarProyect(){
    this.router.navigateByUrl('/register-proyect')
  }
}
