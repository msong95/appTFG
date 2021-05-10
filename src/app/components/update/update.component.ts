import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public formData: FormContent = {
    formTitle: 'Editar Datos',
    buttonText: 'Enviar',
    classTitle: 'text-center',
    btnBlock: true,
    buttonClass: 'btn btn-secondary p-2',
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

  ngOnInit(): void {}

  async update(event) {

  }

}
