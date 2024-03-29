export const PREGUNTAS = {
  pagina_1: [
    {
      id: 1,
      titulo: '¿De qué manera se ha provocado la brecha?',
      respuestas: [
        {
          id: 'respuesta_1_1',
          respuesta: 'Accidental',
          puntuacion: 2
        },
        {
          id: 'respuesta_1_2',
          respuesta: 'Intencionado',
          puntuacion: 5
        },
        {
          id: 'respuesta_1_3',
          respuesta: 'Desconocido',
          puntuacion: 1
        }
      ],
      tipo: 'radio'
    },
    {
      id: 2,
      titulo: '¿Quien lo ha originado?',
      respuestas: [
        {
          id: 'respuesta_2_1',
          respuesta: 'Interno: Ha sido provocado por gente responsable del tratamiento',
          puntuacion: 2
        },
        {
          id: 'respuesta_2_2',
          respuesta: 'Interno: Ha sido provocado por el encargado del tratamiento',
          puntuacion: 5
        },
        {
          id: 'respuesta_2_3',
          respuesta: 'Externo: Ha sido provocado por gente externa que no tiene nada que con el tratamiento interna de la empresa. ',
          puntuacion: 1
        }
      ],
      tipo: 'radio'
    },
    {
      id: 3,
      titulo: '¿Ha sido provocado por un ciberincidente?',
      respuestas: [
        {
          id: 'respuesta_3_1',
          respuesta: 'Si',
          puntuacion: 2
        },
        {
          id: 'respuesta_3_2',
          respuesta: 'No',
          puntuacion: 5
        }
      ],
      tipo: 'radio'
    }
  ],
  pagina_2: [
    {
      id: 4,
      titulo: '¿Qué consecuencias ha provocado la brecha?',
      respuestas: [
        {

          respuesta: 'Se han perdido o destruido datos personales, de tal manera que no se pueden recuperar',
          puntuacion: 2,
          id: 'respuesta_4_1'
        },
        {
          respuesta: 'Se han modificado datos personales que pueden provocar daños a los afectados',
          puntuacion: 5,
          id: 'respuesta_4_2'
        },
        {
          respuesta: 'Personas u organizaciones externas han accedido a esos datos. ',
          puntuacion: 1,
          id: 'respuesta_4_3'
        }
      ],
      tipo: 'checkbox'
    },
    {
      id: 5,
      titulo: '¿Cuál es el grado de daños que puede afectar a las personas afectadas?',
      respuestas: [
        {
          respuesta: 'No se verán afectadas, y en caso que sean afectadas pueden arreglarlo sin ningún problema (nivel bajo)',
          puntuacion: 2,
          id: 'respuesta_5_1'
        },
        {
          respuesta: 'Las personas afectadas podrán encontrar inconvenientes importantes, pero que a pesar de tener algunos problemas se podrán solucionar.(nivel medio)',
          puntuacion: 5,
          id: 'respuesta_5_2'
        },
        {
          respuesta: 'Las personas afectadas podrán enfrentar consecuencias importantes que pueden superar aunque con serias dificultades (nivel alto)',
          puntuacion: 1,
          id: 'respuesta_5_3'
        },
        {
          respuesta: 'Las personas afectadas no podrán superar que sus datos hayan sido afectados (nivel muy alto)',
          puntuacion: 1,
          id: 'respuesta_5_4'
        },
        {
          respuesta: 'Desconocido (ningún nivel, en este caso se contará como 0)',
          puntuacion: 1,
          id: 'respuesta_5_5'
        }
      ],
      tipo: 'radio'
    }
  ],
  pagina_3: [
    {
      id: 6,
      titulo: 'Tipos de datos afectados',
      respuestas: [
        {
          respuesta: 'Datos de escaso riesgo: datos de contacto, de educación, familiares, profesionales, biográficos',
          puntuacion: 2,
          id: 'respuesta_6_1'
        },
        {
          respuesta: 'Datos de comportamiento: localización, tráfico, hábitos y preferencias',
          puntuacion: 5,
          id: 'respuesta_6_2'
        },
        {
          respuesta: 'Datos financieros: transacciones, posiciones, ingresos, cuentas, facturas',
          puntuacion: 1,
          id: 'respuesta_6_3'
        },
        {
          respuesta: 'Datos sensibles: de salud, biométricos, datos relativos a la vida sexual, etc.',
          puntuacion: 1,
          id: 'respuesta_6_4'
        }
      ],
      tipo: 'checkbox'
    }
  ],
  pagina_4: [
    {
      id: 7,
      titulo: 'Entre las personas afectadas, ¿se encuentra algún menor?',
      respuestas: [
        {
          respuesta: 'Si',
          puntuacion: 2,
          id: 'respuesta_7_1'
        },
        {
          respuesta: 'No',
          puntuacion: 5,
          id: 'respuesta_7_2'
        },
        {
          respuesta: 'Desconocido',
          puntuacion: 1,
          id: 'respuesta_7_3'
        }
      ],
      tipo: 'radio'
    },
    {
      id: 8,
      titulo: 'Entre las personas afectadas ¿Existen miembros de colectivos vulnerables (violencia de género o riesgo de exclusión social)?',
      respuestas: [
        {
          respuesta: 'Si',
          puntuacion: 2,
          id: 'respuesta_8_1'
        },
        {
          respuesta: 'No',
          puntuacion: 5,
          id: 'respuesta_8_2'
        },
        {
          respuesta: 'Desconocido',
          puntuacion: 1,
          id: 'respuesta_8_3'
        }
      ],
      tipo: 'radio'
    },
    {
      id: 9,
      titulo: '¿Cuantas personas están afectadas?',
      respuestas: [
        {
          respuesta: '',
          puntuacion: 2,
          id: 'respuesta_9_1'
        }
      ],
      tipo: 'number'
    }
  ],
  pagina_5: [
    {
      id: 10,
      titulo: '¿Cuanto tiempo ha pasado desde el conocimiento de la brecha?',
      respuestas: [
        {
          respuesta: 'Una semana',
          puntuacion: 2,
          id: 'respuesta_10_1'
        },
        {
          respuesta: 'Dos semanas',
          puntuacion: 5,
          id: 'respuesta_10_2'
        },
        {
          respuesta: 'Un mes',
          puntuacion: 1,
          id: 'respuesta_10_3'
        },
        {
          respuesta: 'Más de un mes',
          puntuacion: 1,
          id: 'respuesta_10_4'
        }
      ],
      tipo: 'radio'
    },
  ]
};
