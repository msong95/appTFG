import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;

  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

    initializeForm(){
      this.registroForm= new FormGroup(
        {
        email: new FormControl(),
        password: new FormControl(),
        }

      )
    }

    async registro(){
      const response = await this.auth.registro(this.registroForm.value);
      console.log(response)
      this.router.navigate(['/preguntasHome'])
    }
}
