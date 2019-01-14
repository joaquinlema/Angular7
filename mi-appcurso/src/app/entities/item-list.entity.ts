export class ItemList {
  constructor (
  public id: number,
  public descripcion: string
  ) {}
}

export class GenericList {
  public list: ItemList[];

  public Descripcion(id: number) {
    return this.list.find(item =>  item.id === id).descripcion;
  }
}

export class SexoList extends GenericList {
  constructor() {
    super();
    this.list = [
      new ItemList(0 , 'Masculino'),
      new ItemList(1 , 'Femenino'),
      new ItemList(2 , 'Sin Definir')
    ];
  }
}

export class PerfilesList extends GenericList {
  constructor() {
    super();
    this.list = [
      new ItemList(0 , 'Desarrollador'),
      new ItemList(1 , 'Lider'),
      new ItemList(2 , 'Tester'),
    ];
  }
}

export class CarrerasList extends GenericList {
  constructor() {
    super();
    this.list = [
      new ItemList(0 , 'Tecnicatura CS'),
      new ItemList(1 , 'Ingenieria'),
      new ItemList(2 , 'Consultoria'),
      new ItemList(3 , 'Licenciatura'),
    ];
  }
}
