import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() {

  }

  login(email, clave): Promise<any>{
    try {
      return new Promise((resolve,reject) => {


    })
    } catch (error) {
      return error
    }

  }

  registro(usuario: Usuario): Promise <any>{

    console.log("Username: " ,usuario.username)
    try {
       return new Promise ((resolve,reject)=>{

    })
    } catch (error) {
      return error
    }


  }
}
