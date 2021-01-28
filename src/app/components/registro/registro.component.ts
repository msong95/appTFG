import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;

  constructor(private auth: AuthService) { }

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
    }
}
