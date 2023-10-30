import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent {
  constructor(private router: Router) {}

  cerrarSesion() {
    // Lógica para cerrar la sesión del usuario
    this.router.navigate(['universtars/login']);
  }

}
