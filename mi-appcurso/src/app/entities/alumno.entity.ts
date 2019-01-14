export class Alumno {
  constructor(
  public id: number,
  public nombre: string,
  public apellido: string,
  public sexoID: number,
  public activo: boolean,
  public perfilID: number,
  public materiaID: number
  ) {}
}

export class AlumnoData {
  private alumnos: Alumno[] = [
    {id: 1, nombre: 'Juan', apellido: 'Perez', sexoID: 1 , perfilID: 0, activo:
    true, materiaID: 4},
    {id: 2, nombre: 'Pedro', apellido: 'Garcia', sexoID: 1 , perfilID: 1, activo:
    true, materiaID: 1},
    {id: 3, nombre: 'Ana', apellido: 'Romero', sexoID: 0, perfilID: 2, activo:
    true, materiaID: 2},
    {id: 4, nombre: 'Maria', apellido: 'Gutierrez', sexoID: 0, perfilID: 1,
    activo: true, materiaID: 3}
  ];
  constructor() {}

  GetAll() {
    return this.alumnos;
  }

  GetById(id: number) {
    return this.alumnos.find(a => a.id === id);
  }

  SearchByNombreApellido(nombre: string) {
    return this.alumnos.filter(item => (item.nombre + ' ' + item.apellido).toLowerCase().indexOf(nombre.toLowerCase()) >= 0);
  }

  Update(alumno: Alumno) {
    const pos = this.alumnos.findIndex( al => al.id === alumno.id);
    this.alumnos[pos] = alumno;
  }
}
