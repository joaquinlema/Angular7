import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PerfilesList } from '../entities/item-list.entity';
import { Alumno } from '../entities/alumno.entity';

@Component({
  selector: 'app-alumno-item',
  templateUrl: './alumno-item.component.html',
  styleUrls: ['./alumno-item.component.css']
})
export class AlumnoItemComponent implements OnInit {

  perfiles = new PerfilesList();

  @Input() alumno: Alumno; // instancia del alumno obtenido de alumno lista
  @Input() seleccionado = true;
  @Output() seleccion = new EventEmitter<Alumno>();

  constructor() { }

  ngOnInit() {
  }

  Perfil( perfilID: number) {
    return this.perfiles.Descripcion(perfilID);
    }

  Seleccionar() {
    this.seleccion.emit(this.alumno);
    this.seleccionado = ! this.seleccionado;
  }
}
