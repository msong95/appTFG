import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { FormContent } from 'src/app/interfaces/formContent.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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

    if(GlobalConstants.Login!=true){
      this.router.navigate(['/registro'])

    }else{
      this.router.navigate(['/dashboard'])
    }
  }

  async sendForm(event) {
    GlobalConstants.Login=true;
    this.router.navigate(['/dashboard']);
  }
}
