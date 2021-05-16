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

        if(email==="admin" && clave=="admin"){
          Cookies.set("sesion","si",{ expires: 1 }) // aquí sabremos si la sesión se ha iniciado o no
          console.log("as",Cookies.get("sesion"))
          resolve({message: 'Login correcto', access: true, id:email})
        }else{
          Cookies.set("sesion","no",{ expires: 1 })
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
        Cookies.set("sesion","si",{ expires: 1 })
        resolve({message:'Registro correcto'})
    })
    } catch (error) {
      return error
    }


  }
}
