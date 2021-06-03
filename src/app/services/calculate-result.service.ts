import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateResultService {

  constructor() { }

  
  forPreguntas(listaPreguntas): number{
    let suma:number=0;
    
    listaPreguntas.forEach(pregunta => {
      pregunta.respuestas.forEach(respuesta => {

        if(pregunta.tipo=== "radio" || pregunta.tipo==="checkbox"){
          if((document.getElementById(respuesta.id) as HTMLInputElement).checked){
            let valor=(document.getElementById(respuesta.id) as HTMLInputElement).value
            suma=suma+ (+valor);
            console.log("la respuesta seleccionada es:" , respuesta.respuesta)
          }
        }else if(pregunta.tipo==="number"){
          let valor=(document.getElementById(respuesta.id) as HTMLInputElement).value
          suma=suma+ (+valor);
          console.log("El valor es de tipo number:" , valor)
          }
   
      });
      }); 
      return suma;
    }

    
}
