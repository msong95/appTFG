import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { FormContent } from 'src/app/interfaces/formContent.interface';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
declare var $:any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public error: string = '';
  htmlYouWantToAdd;
  public formData: FormContent = {
    formTitle: 'Formulario de registro',
    buttonText: 'Enviar',
    classTitle: 'text-center',
    btnBlock: true,
    buttonClass: 'btn btn-secondary p-2',
    id: 'registro',
    inputs: [
      {
        title: 'Username',
        tooltip: 'Enter your username',
        data: {
          type: 'text',
          id: 'username',
          validators:[
            Validators.required]
        }
      },
      {
        title: 'Email',
        tooltip: 'Formato de email erróneo',
        data: {
          type: 'email',
          id: 'email',
          validators:[
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
        }
      },
      {
        title: 'Password',
        tooltip: 'Enter your password',
        data: {
          type: 'password',
          id: 'password',
          validators:[
            Validators.required]

        }
      },
      {
        title: 'Repite Password',
        tooltip: 'Enter your password',
        data: {
          type: 'password',
          id: 'repite_password',
          validators:[
            Validators.required]
        }
      }

    ]
  };

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/dashboard'])
    }

  }

  async sendForm(event) {

    // primero comprobamos que las claves son iguales
  let clave = String((document.getElementById("password") as HTMLInputElement).value);
  let clave1 = String((document.getElementById("repite_password") as HTMLInputElement).value);
  let email = String((document.getElementById("email") as HTMLInputElement).value);
  let username = String((document.getElementById("username") as HTMLInputElement).value);
  let usuario = new Usuario(email, username,clave);


  if(clave===""||clave1===""|| email===""||username===""){
    this.htmlYouWantToAdd="<b>Todos los campos son obligatorios</b>"
  }else{
    if(clave===clave1){
      const response = await this.auth.registro(event);
      if(response.token==null){
        this.error = response.error;
        this.htmlYouWantToAdd="<b>Error, el email ya está registrado</b>"
      } else{
          localStorage.setItem('token', response.token);
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.router.navigate(['/dashboard']);
          document.location.reload();

      }
    }else{
      this.htmlYouWantToAdd="<b>Error, las claves no coinciden</b>"
    }
  }



  }

}
