import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Brecha } from '../models/brecha.model';

@Injectable({
  providedIn: 'root'
})
export class CalculateResultService {

  constructor(private http: HttpClient) { }

  
  public getResultados(): Promise<Brecha[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Brecha[]>(`${environment.backendUrl}/resultado/resultados`).subscribe(
        response => resolve(response),
        error => reject(error)
      )
    })
}

  forPreguntas(listaPreguntas): number{
    let suma:number=0;
   
    listaPreguntas.forEach(pregunta => {
      pregunta.respuestas.forEach(respuesta => {
        if(pregunta.seccion!=="pagina 5"){
          if(pregunta.tipo=== "radio"){
            if((document.getElementById(respuesta.id) as HTMLInputElement).checked){
              let valor=(document.getElementById(respuesta.id) as HTMLInputElement).value
              suma=suma+ ((+valor) *0.1);
            }
          }else if(pregunta.tipo==="number"){
            
            let valor=(document.getElementById(respuesta.id) as HTMLInputElement).value

            if(+valor<15){
              suma=suma+ ((+5) *0.1);
            }else{
              suma=suma+ ((+10) *0.1);
            }

         }else if(pregunta.tipo==="checkbox"){

          if((document.getElementById(respuesta.id) as HTMLInputElement).checked){
            let valor=(document.getElementById(respuesta.id) as HTMLInputElement).value
            let valorCheck:number= 0;
            valorCheck=valorCheck + (+valor); 
           // console.log("valor del check:", valorCheck)
            suma=suma+ ((+valorCheck) *0.1);
          }
         }
        }
      });
      }); 
      return suma;
    }

    calcularProbabilidad(listaPreguntas): number{
      let suma:number=0;
      
      listaPreguntas.forEach(pregunta => {
        pregunta.respuestas.forEach(respuesta => {
          if(pregunta.seccion==="pagina 5"){
              if((document.getElementById(respuesta.id) as HTMLInputElement).checked){
                let valor=(document.getElementById(respuesta.id) as HTMLInputElement).value
                suma=suma+((+valor) *0.5);
            }
          }
        });
        }); 
        return suma;
      }


      riesgoTotal(probabilidad, impacto): number{
        let suma:number=(probabilidad*0.4)+ (impacto*0.6);
          return suma;
        }
    
}
