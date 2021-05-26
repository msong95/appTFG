import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(values: Usuario): Promise<any> {
    let headers = {
      ['content-type']: 'application/json'
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.http
        .post(`${environment.backendUrl}/auth/login`, values, { headers })
        .toPromise();
      resolve(response);
      } catch (error) {
        reject(error)
      }
    });
    
  }

  registro(values: Usuario): Promise<any> {
    let headers = {
      ['content-type']: 'application/json'
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.http
          .post(`${environment.backendUrl}/auth/registro`, values, { headers })
          .toPromise();
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}
