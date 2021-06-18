import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormContent } from 'src/app/interfaces/formContent.interface';
import Swal from 'sweetalert2'

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {
  public error: string = '';
  htmlYouWantToAdd;
  public formData: FormContent = {
    formTitle: 'Formulario de login',
    classTitle: 'text-center',
    buttonText: 'Enviar',
    buttonClass: 'btn-secondary btn p-2',
    btnBlock: false,
    id:'login',
    inputs: [
    {
      title: 'Email',
      tooltip: 'Formato de email erróneo',
      data: {
        validators:  [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
        type: 'email',
        id: 'email'
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
    }
  ]
}

  constructor(private router: Router, private auth:AuthService) {

   }


  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/dashboard'])
    }

  }

  async sendForm(event){
    const response = await this.auth.login(event);

    if(response.token != null){
      localStorage.setItem('token', response.token);
      localStorage.setItem('usuario', JSON.stringify(response.usuario));
      this.router.navigate(['/dashboard']);
      document.location.reload();
    } else{
        this.error = response.error;
        // this.showToast();
        Swal.fire('Error',response.error,'error')
    }
  }

 addHTML() {
    this.htmlYouWantToAdd = "<b>Error, no se ha podido realizar el login</b>";
}
  showToast(){
    $('.toast').toast('show');

  }

}
