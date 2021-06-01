import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormContent } from 'src/app/interfaces/formContent.interface';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public error: string = '';
  htmlYouWantToAdd;
  usuario: Usuario;
  public formData: FormContent = {
    formTitle: '',
    buttonText: 'Modificar',
    classTitle: 'text-center',
    btnBlock: true,
    buttonClass: 'btn btn-secondary p-2',
    id:'modificar',
    inputs: [
      {
        title: 'Username',
        tooltip: 'Enter your username',
        data: {
          type: 'text',
          id: 'username',
          value:"hola"
        }
      },
      {
        title: 'Email',
        tooltip: 'Invalid Email',
        data: {
          type: 'email',
          id: 'email',
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
      },
    ]
  };

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {


  }

  async sendForm(event) {
  
    
    // primero comprobamos que las claves son iguales
    let clave = String((document.getElementById("password") as HTMLInputElement).value);
    let clave1 = String((document.getElementById("repite_password") as HTMLInputElement).value);
    
    if(clave===clave1){
     //console.log("modificamos")
      const response = await this.auth.modificar(event);
      if(response){
        this.htmlYouWantToAdd="<b>Modifiación correcta</b>"
      } else{ 
          this.error = response.error;
          this.htmlYouWantToAdd="<b>Modifiación incorrecta</b>"
      
      }
    }else{
      this.htmlYouWantToAdd="<b>Error, las claves no coinciden</b>"
    }
  
  }

}
