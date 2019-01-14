export class Materias {
  constructor(
    public id: number,
    public nombre: string,
    public carreraId: number
  ) {}
}

export class MateriasData {
  private carreras: Materias[] = [
    {id: 1, nombre: 'Informatica', carreraId: 1},
    {id: 2, nombre: 'Cultura', carreraId: 2},
    {id: 3, nombre: 'Ciencia', carreraId: 3},
    {id: 4, nombre: 'Tecnologia', carreraId: 4}
  ];

  GetById(id: number) {
    return this.carreras.find(item => item.id === id);
  }

  GetByName(nombre: string) {
    return this.carreras.find(item => item.nombre === nombre);
  }

  GetAll() {
    return this.carreras;
  }
}

