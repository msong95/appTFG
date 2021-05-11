import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList }from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/preguntas.model';
@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private dbList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.dbList = this.db.list('/users')
   }

   getAll(): Observable<any[]>{
     return this.dbList.snapshotChanges()
   }

   addPregunta(pregunta: Pregunta){
    pregunta = {
      titulo: 'Pregunta 1',
      seccion: 'pagina 1',
      respuestas: [
        {
          id: 'respuesta_1',
          respuesta: 'Respuesta 1',
          puntuacion: 2
        },
        {
          respuesta: 'Respuesta 2',
          puntuacion: 5
        },
        {
          respuesta: 'Respuesta 3',
          puntuacion: 1
        }
      ],
      tipo: 'radio'
    }


   }
}
