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
    { titulo: 'Universidad de Cartagena', contenido: 'Este es el contenido del contenedor 1.', ciudad: 'cartagena', src: '../../assets/img/Universidad Cartagena.jpg'},
    { titulo: 'UTB', contenido: 'Este es el contenido del contenedor 2.', ciudad: 'cartagena', src: '../../assets/img/Universidad UTB.jpeg' },
    { titulo: 'Tecnologico Comfenalco', contenido: 'Este es el contenido del contenedor 3.', ciudad: 'cartagena', src: '../../assets/img/Tecno Comfenalco.jpeg'},
    { titulo: 'Universidad SanBuenaventura', contenido: 'Este es el contenido del contenedor 4.', ciudad: 'cartagena', src: '../../assets/img/Universidad SanBue.jpg' },
    { titulo: 'Universidad del atlantico', contenido: 'Este es el contenido del contenedor 5.', ciudad: 'barranquilla', src: '../../assets/img/Universidad Atlantico.jpeg' },
    { titulo: 'Universidad de Antioquia', contenido: 'Este es el contenido del contenedor 6.', ciudad: 'medellin', src: '../../assets/img/Universidad Antioquia.jpg' },
    { titulo: 'Universidad Nacional', contenido: 'Este es el contenido del contenedor 7.' , ciudad: 'bogota', src: '../../assets/img/Universidad Nacional.jpg'},
    { titulo: 'Universidad de Cali', contenido: 'Este es el contenido del contenedor 8.', ciudad: 'cali' , src: '../../assets/img/Universidad Cali.jpg'},
    { titulo: 'Universidad de Bucaramanga', contenido: 'Este es el contenido del contenedor 9.' , ciudad: 'bucaramanga'},
    { titulo: 'Universidad de Boyaca', contenido: 'Este es el contenido del contenedor 10.', ciudad: 'boyaca'},
    { titulo: 'Universidad de Cartagena', contenido: 'Este es el contenido del contenedor 1.', ciudad: 'cartagena', src: '../../assets/img/Universidad Cartagena.jpg'},
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
