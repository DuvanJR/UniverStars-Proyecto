import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  filter: boolean = false
  @Output() result = new EventEmitter 
  @Output() todosCiudad = new EventEmitter

  ciudades=[
    {nombre: 'Cartagena', value:'cartagena'},
    {nombre: 'Bogota', value:'bogota'},
    {nombre: 'Barranquilla', value:'barranquilla'},
    {nombre: 'Bucaramanga', value:'bucaramanga'},
    {nombre: 'Cali', value:'cali'},
    {nombre: 'Medellin', value:'medellin'},
    {nombre: 'Boyaca', value:'boyaca'},

  ]

  filterByCity(ciudad: string){
    this.result.emit(ciudad)
  }


  seeFilter(){
    console.log("entrando a la funcion")
    this.filter =! this.filter
  }

  mostrarTodo(){
    this.todosCiudad.emit()
  }

  

}
