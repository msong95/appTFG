import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { FormContent } from 'src/app/interfaces/formContent.interface';
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
          id: 'username'
        }
      },
      {
        title: 'Email',
        tooltip: 'Invalid Email',
        data: {
          type: 'email',
          id: 'email'
        }
      },
      {
        title: 'Password',
        tooltip: 'Enter your password',
        data: {
          type: 'password',
          id: 'password'
        }
      },
      {
        title: 'Repite Password',
        tooltip: 'Enter your password',
        data: {
          type: 'password',
          id: 'repite_password'
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
  
  if(clave===clave1){
    const response = await this.auth.registro(event);
    if(response.token==null){
      this.error = response.error;
      this.htmlYouWantToAdd="<b>Error, el email ya está registrado</b>"
    } else{
        localStorage.setItem('token', response.token);
        localStorage.setItem('usuario', JSON.stringify(response.token));
        this.router.navigate(['/dashboard']);
    
    }
  }else{
    this.htmlYouWantToAdd="<b>Error, las claves no coinciden</b>"
  }


  }

}