export class Resultado {
    titulo:string;
    minimo:string;
    maximo: string;
    descripcion: string;
    solucion: string;

    
    constructor(titulo: string,minimo: string, maximo: string, descripcion:string, solucion:string) {
        this.titulo=titulo;
        this.minimo = minimo;
        this.maximo = maximo;
        this.descripcion=descripcion;
        this.solucion=solucion;
    }
}
