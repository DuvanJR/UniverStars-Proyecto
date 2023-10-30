import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ContenedorComponent',
  templateUrl: './ContenedorComponent.component.html',
  styleUrls: ['./ContenedorComponent.component.scss']
})
export class ContenedorComponentComponent {

  constructor() { }

  filtrar(){
    const result = this.informacion.filter(( universidades ) =>  universidades.titulo.includes('Cartagena'))
    this.informacion=result;
  }



  informacion  = [
    { titulo: 'Universidad de Cartagena', contenido: 'Este es el contenido del contenedor 1.', imagen: 'assests/img/Universidad Cartagena' },
    { titulo: 'UTB', contenido: 'Este es el contenido del contenedor 2.' },
    { titulo: 'Tecnologico Comfenalco', contenido: 'Este es el contenido del contenedor 3.' },
    // ... Más objetos de datos
  ];
}
