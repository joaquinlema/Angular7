import { Component, OnInit } from '@angular/core';
import { Alumno, AlumnoData } from '../entities/alumno.entity';
import { Materias, MateriasData } from '../entities/materias.entity';

@Component({
  selector: 'app-alumno-manager',
  templateUrl: './alumno-manager.component.html',
  styleUrls: ['./alumno-manager.component.css']
})
export class AlumnoManagerComponent implements OnInit {

  private _alumnosData: AlumnoData;
  private _materiasData: MateriasData;
  alumnoSeleccionado: Alumno = null;
  alumnos: Alumno[];
  materias: Materias[];

  constructor() {
    this._alumnosData  = new AlumnoData(); // deberia ser un servicip luego se cambiara
    this._materiasData = new MateriasData();
    this.alumnos = this._alumnosData.GetAll();
    this.materias = this._materiasData.GetAll();
  }

  ngOnInit() {
  }

  SeleccionarAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
  }

  filtrarAlumnos(filtrar: string) {
     this.alumnos = this._alumnosData.SearchByNombreApellido(filtrar);
    }

    cerrarPanelEdicion(alumno: Alumno) {
      if (alumno) {
        this._alumnosData.Update(alumno);
      }

      this.alumnoSeleccionado = null;
    }

}
