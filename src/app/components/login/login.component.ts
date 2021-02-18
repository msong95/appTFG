import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  preguntasForm: FormGroup;

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit(): void {
    this.initializeForm()

  }

  initializeForm(){
    this.loginForm = new FormGroup(
      {
        email: new FormControl(),
        password: new FormControl()
      }
    )
  }

  async login(){
    const response = await this.auth.login(this.loginForm.value);
    console.log(response)
    this.router.navigate(['/preguntasHome'])
  }

}
