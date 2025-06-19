import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-proyect',
  templateUrl: './detail-proyect.page.html',
  styleUrls: ['./detail-proyect.page.scss'],
  standalone: false
})
export class DetailProyectPage implements OnInit {


  nombre: any;
  descripcion: any;
  integrantes: any;
  ficha: any;
  trimestre: any;
  estado: any;

  constructor(
    public http: HttpClient,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        
        console.log(params)
        const id = params['id'];
        this.get_id_proyect(id)
      }
    });
  }

  get_id_proyect(id: any){
    this.http.get<any>(`http://127.0.0.1:8000/proyectos/${id}`).subscribe(value => {
      
        // Assuming value is an object with properties: nombre, descripcion, fecha_inicio, fecha_fin, estado
        this.nombre = value[0].nombre;
        this.descripcion = value[0].descripcion;
        this.integrantes = value[0].integrantes;
        this.ficha = value[0].ficha;
        this.trimestre = value[0].trimestre;
        this.estado = value[0].estado;
    });
  }

}
