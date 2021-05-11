import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormContent } from 'src/app/interfaces/formContent.interface';
import{ GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {


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

  constructor(private router: Router, private auth:AuthService) {
    
   }

   
  ngOnInit(): void {

    if(GlobalConstants.Login!=true){
      this.router.navigate(['/login'])

    }else{
      this.router.navigate(['/dashboard'])
    }
  }

  sendForm(event){
    let tipo=String(this.formData.id)
    console.log("información:",tipo)
    if(event.access) this.router.navigate(['/dashboard'])

  }

}
