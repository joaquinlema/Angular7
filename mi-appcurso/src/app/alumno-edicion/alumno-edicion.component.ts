import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../entities/alumno.entity';
import { PerfilesList, SexoList, ItemList } from '../entities/item-list.entity';

@Component({
  selector: 'app-alumno-edicion',
  templateUrl: './alumno-edicion.component.html',
  styleUrls: ['./alumno-edicion.component.css']
})

export class AlumnoEdicionComponent implements OnInit {

  @Input() alumno: Alumno;
  @Output() cerrar = new EventEmitter<Alumno>();

  perfilesDisponibles: PerfilesList;
  sexosDisponibles: SexoList;

  constructor() {
    this.perfilesDisponibles = new PerfilesList();
    this.sexosDisponibles = new SexoList();
   }

  ngOnInit() {
  }

  Perfil(perfilID: number) {
    return this.perfilesDisponibles.Descripcion(perfilID);
  }

  Sexo(sexoID: number) {
    return this.sexosDisponibles.Descripcion(sexoID);
  }

  Perfiles(): ItemList[] {
    return this.perfilesDisponibles.list;
  }

  Sexos(): ItemList[] {
    return this.sexosDisponibles.list;
  }

  cancelar() {
    this.cerrar.emit(null);
  }

  guardar(formValue: any) {
    const alumno: Alumno = {...formValue, ...{id: this.alumno.id}};
    this.cerrar.emit(alumno);
  }

}
