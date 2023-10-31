import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ContenedorComponent',
  templateUrl: './ContenedorComponent.component.html',
  styleUrls: ['./ContenedorComponent.component.scss']
})
export class ContenedorComponentComponent {

  constructor(private router: Router) { }

  filtrar(ciudad:string){
    this.informacion=this.copiArray;
    const result = this.informacion.filter(( universidades ) =>  universidades.ciudad.includes(ciudad));
    this.informacion=result;
  }

  informacion  = [
    { titulo: 'Universidad de Cartagena', contenido: 'Este es el contenido del contenedor 1.', ciudad: 'cartagena' },
    { titulo: 'UTB', contenido: 'Este es el contenido del contenedor 2.', ciudad: 'cartagena'},
    { titulo: 'Tecnologico Comfenalco', contenido: 'Este es el contenido del contenedor 3.', ciudad: 'cartagena' },
    { titulo: 'Universidad de San Buenaventura', contenido: 'Este es el contenido del contenedor 4.', ciudad: 'cartagena' },
    { titulo: 'Universidad del atlantico', contenido: 'Este es el contenido del contenedor 5.', ciudad: 'barranquilla' },
    { titulo: 'Universidad de Antioquia', contenido: 'Este es el contenido del contenedor 6.', ciudad: 'medellin' },
    { titulo: 'Universidad Nacional', contenido: 'Este es el contenido del contenedor 7.' , ciudad: 'bogota'},
    { titulo: 'Universidad de Cali', contenido: 'Este es el contenido del contenedor 8.', ciudad: 'cali'},
    { titulo: 'Universidad de Bucaramanga', contenido: 'Este es el contenido del contenedor 9.' , ciudad: 'bucaramanga'},
    { titulo: 'Universidad de Boyaca', contenido: 'Este es el contenido del contenedor 10.', ciudad: 'boyaca'},
    // ... Más objetos de datos
  ];

  copiArray=this.informacion;

  getAllCity(){
    this.informacion=this.copiArray;
  }

  see(){
    this.router.navigate(['universtars/menu/ver-detalle']);
  }
}
