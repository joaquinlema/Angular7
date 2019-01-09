export class Alumno {
  constructor(
  public id: number,
  public nombre: string,
  public apellido: string,
  public sexoID: number,
  public activo: boolean,
  public perfilID: number
  ) {}
}

const alumnoData = new Alumno(1, 'Juan', 'Perez', 1, true, 0);

export { alumnoData };
