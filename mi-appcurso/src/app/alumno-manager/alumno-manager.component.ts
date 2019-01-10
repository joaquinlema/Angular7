import { Component, OnInit } from '@angular/core';
import { Alumno, AlumnoData } from '../entities/alumno.entity';

@Component({
  selector: 'app-alumno-manager',
  templateUrl: './alumno-manager.component.html',
  styleUrls: ['./alumno-manager.component.css']
})
export class AlumnoManagerComponent implements OnInit {
  private _alumnosData: AlumnoData;
  alumnoSeleccionado: Alumno = null;
  alumnos: Alumno[];

  constructor() {
    this._alumnosData  = new AlumnoData();
    this.alumnos = this._alumnosData.GetAll();
  }


  ngOnInit() {
  }

}
