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
  listaComentarios: string[] = []; 

  

  agregarComentario() {
    this.listaComentarios.push(this.comentarioTemporal);
    this.comentarioTemporal = ''; // Reinicia el textarea temporal

    console.log(this.listaComentarios, this.comentarioTemporal)
  }
}
