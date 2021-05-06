export interface TotalPreguntas {
  pagina_1: Preguntas[],
  pagina_2: Preguntas[],
  pagina_3: Preguntas[],
  pagina_4: Preguntas[],
  pagina_5: Preguntas[],
}

export interface Preguntas {
    titulo: string;
    respuestas: Respuestas[];
    tipo: string;
  }

  export interface Respuestas {
    respuesta: string;
    puntuacion: number | string;
    id?: string;
  }
