import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Brecha } from '../models/brecha.model';

@Injectable({
  providedIn: 'root'
})
export class CalculateResultService {

  constructor(private http: HttpClient) { }

  
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

    
   crearBrecha(values: Brecha): Promise<any> {
      let headers = {
        ['content-type']: 'application/json'
      };
      return new Promise(async (resolve, reject) => {
        try {
          const response = await this.http
            .post(`${environment.backendUrl}/brecha/crearBrecha`, values, { headers })
            .toPromise();
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
    }

    
}
