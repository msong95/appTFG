export interface totalBrecha {
    listado: Brecha[],
  }
  
export interface Brecha {
    email: string;
    titulo:string;
    resultado: string;
    solucion: string;
    fecha:string;
}

export class Brecha {
  email: string;
  titulo:string;
  resultado: string;
  solucion: string;
  fecha:string;
  constructor(email: string,titulo:string,resultado: string, solucion: string, fecha:string) {
      this.email=email;
      this.titulo=titulo;
      this.resultado = resultado;
      this.solucion = solucion;
      this.fecha=fecha;
  }
}
