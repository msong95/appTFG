import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormContent } from 'src/app/interfaces/formContent.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formData: FormContent = {
    formTitle: 'Formulario de login',
    classTitle: 'text-center',
    buttonText: 'Enviar',
    buttonClass: 'btn-secondary btn p-2',
    btnBlock: false,
    inputs: [
    {
      title: 'Email',
      tooltip: 'Enter your Email',
      data: {
        validators: [Validators.required, Validators.pattern('')],
        type: 'email',
        id: 'email'
      }
    },
    {
      title: 'Password',
      tooltip: 'Enter your password',
      data: {
        type: 'password',
        id: 'password1'
      }
    }
  ]
}

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit(): void {

  }


  async login(){
    //const response = await this.auth.login(this.loginForm.value);
    //console.log(response)
    this.router.navigate(['/preguntasHome'])
  }

  sendForm(event){
    if(event.access) this.router.navigate(['/preguntas1'])

  }

}
