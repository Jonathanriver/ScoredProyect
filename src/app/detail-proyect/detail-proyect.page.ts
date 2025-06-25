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

  id: any;
  nombre: any;
  descripcion: any;
  integrantes: any;
  ficha: any;
  trimestre: any;
  estado: any;
  aprobado_status: any;
  calificacion: any;
  show: boolean = true;

  presentacion: any;
  trabajo_equipo: any;
  desarrollo: any;
  front: any;
  back: any;
  documentacion: any;
  requerimientos: any;

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

  get_id_proyect(id: any) {
    this.http.get<any>(`http://127.0.0.1:8000/proyectos/${id}`).subscribe(value => {

      // Assuming value is an object with properties: nombre, descripcion, fecha_inicio, fecha_fin, estado
      this.id = value[0].idproyectos;
      this.nombre = value[0].nombre;
      this.descripcion = value[0].descripcion;
      this.integrantes = value[0].integrantes;
      this.ficha = value[0].ficha;
      this.trimestre = value[0].trimestre;
      if (value[0].estado == 1) {
        this.estado = "Analisis";
      } else if (value[0].estado == 2) {
        this.estado = "Planeación";
      } else if (value[0].estado == 3) {
        this.estado = "Desarrollo";
      } else if (value[0].estado == 4) {
        this.estado = "Pruebas";
      } else if (value[0].estado == 5) {
        this.estado = "Producción";
      }
      this.calificacion = value[0].calificacion_idcalificacion;

      if (value[0].aprobado_status == 1) {
        this.show = false;
      }

      this.get_califications(this.calificacion)

    });
  }

  get_califications(id: any){
    this.http.get<any>(`http://127.0.0.1:8000/proyectos/calificaciones/${id}`).subscribe(value => {
      // Procesar las calificaciones recibidas      
      this.presentacion = value[0].presentacion;
      this.trabajo_equipo = value[0].trabajo_equipo;
      this.desarrollo = value[0].desarrollo;
      this.front = value[0].front;
      this.back = value[0].back;
      this.documentacion = value[0].documentacion;
      this.requerimientos = value[0].requerimientos;
    });
  }


  CalificarProyecto() {
    this.router.navigate(
      ['/aprobed-proyect'],
      { queryParams: { id: this.id } }
    )
  }

}
