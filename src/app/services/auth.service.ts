import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalConstants } from '../common/global-constants';
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

        if(email==="admin" && clave=="admin"){
          GlobalConstants.Login=true;
          resolve({message: 'Login correcto', access: true, id:email})
        }else{
          resolve({message: 'Login incorrecto', access: false})
        }
      
    })
    } catch (error) {
      return error
    }

  }

  registro(usuario: Usuario): Promise <any>{

    console.log("Username: " ,usuario.username)
    try {
       return new Promise ((resolve,reject)=>{
        resolve({message:'Registro correcto'})
    })
    } catch (error) {
      return error
    }


  }
}
