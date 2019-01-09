import { Component, OnInit } from '@angular/core';
import { PerfilesList } from '../entities/item-list.entity';
import { alumnoData } from '../entities/alumno.entity';

@Component({
  selector: 'app-alumno-item',
  templateUrl: './alumno-item.component.html',
  styleUrls: ['./alumno-item.component.css']
})
export class AlumnoItemComponent implements OnInit {

  alumno = alumnoData;
  perfiles = new PerfilesList();
  seleccionado = false;

  constructor() { }

  ngOnInit() {
  }

  Perfil( perfilID: number) {
    return this.perfiles.Descripcion(perfilID);
    }

  cambiarSeleccion() {
    this.seleccionado = ! this.seleccionado;
  }
}
