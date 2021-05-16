import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormContent } from 'src/app/interfaces/formContent.interface';

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: string = '';
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
        id: 'password'
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

  async sendForm(event){
    const response = await this.auth.login(event);
    console.log(response)
    if(response.token){
      localStorage.setItem('token', response.token);
      this.router.navigate(['/preguntasHome']);
    } else {
        this.error = response.error;
        $('.toast').toast('show');


      //this.router.navigate(['/login']);
    }
    // this.router.navigate(['/preguntasHome']);

  }
  showToast(){
    $('.toast').toast('show');

  }

}
