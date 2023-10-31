import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-details',
  templateUrl: './see-details.component.html',
  styleUrls: ['./see-details.component.scss']
})
export class SeeDetailsComponent {

  constructor(private router: Router) { }

  back(){
    this.router.navigate(['universtars/menu']);
  }

  comentarioTemporal: string = ''; 
  listaComentarios: { numero: number, comentario: string }[] = [];
  contadorComentarios: number = 0; // Inicializa el contador en 0

  

  agregarComentario() {
    this.contadorComentarios++;
    this.listaComentarios.push({ numero: this.contadorComentarios, comentario: this.comentarioTemporal });
    this.comentarioTemporal = '';

    console.log(this.listaComentarios, this.comentarioTemporal)
  }
}
