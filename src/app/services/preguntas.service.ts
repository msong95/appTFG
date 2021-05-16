import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pregunta } from '../models/preguntas.model';
@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  preguntas: Pregunta[];

  constructor(private http: HttpClient) {
   }

   public getAll(): Promise<Pregunta[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Pregunta[]>(`${environment.backendUrl}/preguntas`).subscribe(
        response => resolve(response),
        error => reject(error)
      )
    })
    // this.http.get(`${environment.backendUrl}/preguntas`).subscribe(response =>
    //   console.log(response))
    // return this.preguntas;


   }

}
