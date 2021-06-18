import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormContent, Inputs } from 'src/app/interfaces/formContent.interface';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() userLogged: any;

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
          id: 'password',
          validators: [Validators.required]
        }
      },
      {
        title: 'Repite Password',
        tooltip: 'Enter your password',
        data: {
          type: 'password',
          id: 'repite_password',
          validators: [Validators.required]
        }
      },
    ]
  };



  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.formData.inputs.map((input: Inputs) => {
      if(input.data.type !== 'password'){
        input.value = this.userLogged[input.data.id]
      }
    })
  }

  async sendForm(event) {

    event.id = this.userLogged._id
    const response = await this.auth.modificar(event)
    Swal.fire(response.message,'', 'success' )

    // primero comprobamos que las claves son iguales
    // let clave = String((document.getElementById("password") as HTMLInputElement).value);
    // let clave1 = String((document.getElementById("repite_password") as HTMLInputElement).value);
    // let email = String((document.getElementById("email") as HTMLInputElement).value);
    // let username = String((document.getElementById("username") as HTMLInputElement).value);

    // if(clave===""||clave1===""|| email===""||username===""){
    //   this.htmlYouWantToAdd="<b>Todos los campos son obligatorios</b>"

    // }else{
    //   if(clave===clave1){
    //     console.log("modificamos")
    //      const response = await this.auth.modificar(event);
    //      console.log(response)
    //      if(response){
    //        this.htmlYouWantToAdd="<b>Modificación correcta</b>"
    //      } else{
    //          this.error = response.error;
    //          this.htmlYouWantToAdd="<b>Modificación incorrecta</b>"

    //      }
    //    }else{
    //      this.htmlYouWantToAdd="<b>Error, las claves no coinciden</b>"
    //    }
    // }


  }


}
