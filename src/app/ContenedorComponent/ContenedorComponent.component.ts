import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ContenedorComponent',
  templateUrl: './ContenedorComponent.component.html',
  styleUrls: ['./ContenedorComponent.component.scss']
})
export class ContenedorComponentComponent {

  constructor(private router: Router) { }

  filtrar(){
    const result = this.informacion.filter(( universidades ) =>  universidades.titulo.includes('Cartagena'))
    this.informacion=result;
  }



  informacion  = [
    { titulo: 'Universidad de Cartagena', contenido: 'Este es el contenido del contenedor 1.' },
    { titulo: 'UTB', contenido: 'Este es el contenido del contenedor 2.' },
    { titulo: 'Tecnologico Comfenalco', contenido: 'Este es el contenido del contenedor 3.' },
    { titulo: 'Universidad de San Buenaventura', contenido: 'Este es el contenido del contenedor 4.' },
    { titulo: 'Universidad del atlantico', contenido: 'Este es el contenido del contenedor 5.' },
    { titulo: 'Universidad de Antioquia', contenido: 'Este es el contenido del contenedor 6.' },
    { titulo: 'Universidad de Bogota', contenido: 'Este es el contenido del contenedor 7.' },
    { titulo: 'Universidad de Cali', contenido: 'Este es el contenido del contenedor 8.' },
    { titulo: 'Universidad de Bucaramanga', contenido: 'Este es el contenido del contenedor 9.' },
    { titulo: 'Universidad de Boyaca', contenido: 'Este es el contenido del contenedor 10.' },
    // ... Más objetos de datos
  ];

  see(){
    this.router.navigate(['universtars/menu/ver-detalle']);
  }
}
