export interface totalBrecha {
    listado: Brecha[],
  }
  
export interface Brecha {
    email: string;
    resultado: string;
    solucion: string;
    fecha:string;
}

export class Brecha {
  email: string;
  resultado: string;
  solucion: string;
  fecha:string;
  constructor(email: string,resultado: string, solucion: string, fecha:string) {
      this.email=email;
      this.resultado = resultado;
      this.solucion = solucion;
      this.fecha=fecha;
  }
}
