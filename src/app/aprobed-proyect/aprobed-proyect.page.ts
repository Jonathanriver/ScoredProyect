import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-aprobed-proyect',
  templateUrl: './aprobed-proyect.page.html',
  styleUrls: ['./aprobed-proyect.page.scss'],
  standalone: false // This indicates that this component is not a standalone component
})
export class AprobedProyectPage implements OnInit {

  id: any;
  nombre: any;
  descripcion: any;
  integrantes: any;
  ficha: any;
  trimestre: any;
  estado: any;
  aprobado_status: any;
  show: boolean = true;

  presentacion: any;
  observacion_presentacion: any;
  trabajo_equipo: any;
  observacion_trabajo_equipo: any;
  desarrollo: any;
  observacion_desarrollo: any;
  front: any;
  observacion_front: any;
  back: any;
  observacion_back: any;
  documentacion: any;
  observacion_documentacion: any;
  requerimientos: any;
  observacion_requerimientos: any;

  id_proyecto_aproved: any;

  constructor(
    public http: HttpClient,
    public router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController
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

      if (value[0].aprobado_status == 1) {
        this.show = false;
      }

    });
  }

  async Calificar() {

    // validacion de parametros
    const querypresentacion = this.presentacion;
    const queryobservacion_presentacion = this.observacion_presentacion;
    const querytrabajo_equipo = this.trabajo_equipo;
    const queryobservacion_trabajo_equipo = this.observacion_trabajo_equipo;
    const querydesarrollo = this.desarrollo;
    const queryobservacion_desarrollo = this.observacion_desarrollo;
    const queryfront = this.front;
    const queryobservacion_front = this.observacion_front;
    const queryback = this.back;
    const queryobservacion_back = this.observacion_back;
    const querydocumentacion = this.documentacion;
    const queryobservacion_documentacion = this.observacion_documentacion;
    const queryrequerimientos = this.requerimientos;
    const queryobservacion_requerimientos = this.observacion_requerimientos;

    // formulario del servicio post
    const bodyData = {
      presentacion: this.presentacion,
      observacion_presentacion: this.observacion_presentacion,
      trabajo_equipo: this.trabajo_equipo,
      observacion_trabajo_equipo: this.observacion_trabajo_equipo,
      desarrollo: this.desarrollo,
      observacion_desarrollo: this.observacion_desarrollo,
      front: this.front,
      observacion_front: this.observacion_front,
      back: this.back,
      observacion_back: this.observacion_back,
      documentacion: this.documentacion,
      observacion_documentacion: this.observacion_documentacion,
      requerimientos: this.requerimientos,
      observacion_requerimientos: this.observacion_requerimientos
    };


    let params = new HttpParams();
    params = params.append('presentacion', querypresentacion);
    params = params.append('observacion_presentacion', queryobservacion_presentacion);
    params = params.append('trabajo_equipo', querytrabajo_equipo);
    params = params.append('observacion_trabajo_equipo', queryobservacion_trabajo_equipo);
    params = params.append('desarrollo', querydesarrollo);
    params = params.append('observacion_desarrollo', queryobservacion_desarrollo);
    params = params.append('front', queryfront);
    params = params.append('observacion_front', queryobservacion_front);
    params = params.append('back', queryback);
    params = params.append('observacion_back', queryobservacion_back);
    params = params.append('documentacion', querydocumentacion);
    params = params.append('observacion_documentacion', queryobservacion_documentacion);
    params = params.append('requerimientos', queryrequerimientos);
    params = params.append('observacion_requerimientos', queryobservacion_requerimientos);

    // Registrar proyecto
    await this.http.post('http://127.0.0.1:8000/proyectos/calificacion', bodyData, { params: params }).forEach((response: any) => {
      if (response) {
        localStorage.setItem('calificacion', JSON.stringify(bodyData));
        this.id_proyecto_aproved = response;
        this.aprobado_status = 1;
        console.log(this.id_proyecto_aproved);
        // Actualizar el estado del proyecto a aprobado
        this.actualizarEstadoProyecto(this.id);
        this.presentAlertExito();
      }

    });


    return true;
  }

  actualizarEstadoProyecto(id: any) {

    let params = new HttpParams();
    params = params.append('aprobado_status', this.aprobado_status.toString());
    params = params.append('calificacion_idcalificacion', this.id_proyecto_aproved.toString());

    const bodyData = {
      idproyectos: this.id_proyecto_aproved,
      aprobado_status: this.aprobado_status
    };

    console.log(bodyData);


    this.http.put(`http://127.0.0.1:8000/proyectos/update/${id}`, bodyData, { params: params }).subscribe((response: any) => {
      if (response) {
        console.log('Estado del proyecto actualizado:', response);
      }
    });
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

}
