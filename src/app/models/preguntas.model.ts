export interface Preguntas {
    titulo: string;
    respuestas: Respuestas[];
    tipo: string;
  }
  
  export interface Respuestas {
    respuesta: string;
    puntuacion: number | string;
  }
  