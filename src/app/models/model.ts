export  interface InterfazModel {
  id: number;
  entidadId: number;
  operationType: string;
  methodType: string;
  endpoint: string;
  plantillas: any[];
}

export  interface EntidadModel {
  id?: number;
  nombre: string;
  type: string;
  interfaces: InterfazModel[];
}

export  interface ResponseModel {
  data: (EntidadModel | InterfazModel | any)[];
  mensaje: string;
  codigo: string;
}

export class EntidadModelImpl implements EntidadModel {
  id?: number;
  nombre: string;
  type: string;
  interfaces: any[]; // Definir interfaces según corresponda

  constructor(nombre: string, type: string) {
    this.nombre = nombre;
    this.type = type;
    this.interfaces = []; // Inicializar interfaces según corresponda
  }
}
