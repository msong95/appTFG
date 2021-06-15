import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Brecha } from '../models/brecha.model';

@Injectable({
  providedIn: 'root'
})
export class BrechasService {

  constructor(private http: HttpClient) { }

  public getBrechas(): Promise<Brecha[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Brecha[]>(`${environment.backendUrl}/brecha/recuperarBrecha`).subscribe(
        response => resolve(response),
        error => reject(error)
      )
    })
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

async buscarBrechas(email): Promise<Brecha[]>{

 let lista = await this.getBrechas();
 let listado: Brecha[]= new Array;
  lista.forEach(function(brecha, index) {
    if(brecha.email===email){
     
       listado[index]=brecha
    }
});

 return listado;

}

convertirPromesa(email): Brecha[]{
  let lista = this.buscarBrechas(email);
  let listado: Brecha[]= new Array;
  lista.then(function(resultado) {
    resultado.forEach(function(brecha, index) {
      listado[index]=brecha
  });
  
  })

  return listado;
 
 }
}
