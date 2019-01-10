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
  @Input() alumno: Alumno;
  @Input() seleccionado = false;
  @Output() seleccion = new EventEmitter<Alumno>();

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
