import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../entities/alumno.entity';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {

  @Input() alumnos: Alumno[];
  @Input() alumnoSeleccionado: Alumno;
  @Output() Seleccionar = new EventEmitter<Alumno>();

  constructor() { }

  ngOnInit() {
  }

  SeleccionarAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    this.Seleccionar.emit(alumno);
    }

}
