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



  login(): Promise<any>{
    try {
      return new Promise((resolve,reject) => {
        GlobalConstants.Login=true;
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
