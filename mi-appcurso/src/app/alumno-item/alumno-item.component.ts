import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PerfilesList, CarrerasList } from '../entities/item-list.entity';
import { Alumno } from '../entities/alumno.entity';
import { Materias } from '../entities/materias.entity';

@Component({
  selector: 'app-alumno-item',
  templateUrl: './alumno-item.component.html',
  styleUrls: ['./alumno-item.component.css']
})
export class AlumnoItemComponent implements OnInit {

  perfiles = new PerfilesList();
  materias = new CarrerasList();

  @Input() alumno: Alumno; // instancia del alumno obtenido de alumno lista
  @Input() materia: Materias;
  @Input() seleccionado = true;
  @Output() seleccion = new EventEmitter<Alumno>();

  constructor() { }

  ngOnInit() {
  }

  Perfil( perfilID: number) {
    return this.perfiles.Descripcion(perfilID);
    }

  Materia( materiaId: number) {
    return this.materias.Descripcion(materiaId);
  }

  Seleccionar() {
    this.seleccion.emit(this.alumno);
    this.seleccionado = ! this.seleccionado;
  }
}
