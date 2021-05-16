import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(values: Usuario): Promise<any>{
    try {
      return new Promise((resolve,reject) => {
      resolve({message: 'Login correcto', access: true})
    })
    } catch (error) {
      return error
    }

  }

  registro(values: Usuario): Promise <any>{
    console.log(values)
    try {
       return new Promise ((resolve,reject)=>{
        resolve({message:'Registro correcto'})
    })
    } catch (error) {
      return error
    }


  }
}
