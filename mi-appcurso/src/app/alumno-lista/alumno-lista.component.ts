import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../entities/alumno.entity';
import { Materias } from '../entities/materias.entity';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {

  @Input() alumnos: Alumno[];
  @Input() materias: Materias[];
  @Input() alumnoSeleccionado: Alumno;
  @Output() seleccion = new EventEmitter<Alumno>();

  constructor() { }

  ngOnInit() {
  }

  SeleccionarAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    this.seleccion.emit(alumno);
  }

}
