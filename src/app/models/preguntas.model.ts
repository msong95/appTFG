export interface TotalPreguntas {
  pagina_1: Pregunta[],
  pagina_2: Pregunta[],
  pagina_3: Pregunta[],
  pagina_4: Pregunta[],
  pagina_5: Pregunta[],
}

export interface Pregunta {
    titulo: string;
    seccion?: string;
    respuestas: Respuestas[];
    tipo: string;
  }

  export interface Respuestas {
    respuesta: string;
    puntuacion: number | string;
    id?: string;
  }
