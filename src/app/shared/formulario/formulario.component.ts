import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormContent, Inputs } from 'src/app/interfaces/formContent.interface';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() formContent: FormContent;
  @Output() sendForm;

  inputForms: any = {};
  formulario: FormGroup;

  constructor( private auth: AuthService, router: Router
    ) {
    this.sendForm = new EventEmitter()
   } 

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    const inputs = this.formContent.inputs;
    inputs.forEach((input: Inputs) => {
      this.inputForms[input.data.id] = new FormControl('',input.data.validators)
    });
    this.formulario = new FormGroup(this.inputForms)

  }

  async onSubmit(){

    //let prueba=String(this.formulario.value.username)
    //let prueba2=String(this.formulario.value.email)
    let email= String(this.formulario.value.email)
    let clave=String(this.formulario.value.password1)
    let tipo=String(this.formContent.id)
   // console.log("Tipo: " , prueba3)
   let planet: Usuario = {
    username : "Earth",
    email : "Milky Way",
    password : "123"
};

    if(tipo==="modificar"){
      console.log("Estas modificando")
    }else if (tipo === "login"){
      console.log("Estas logueando")
      const response = await this.auth.login(email,clave)
      console.log("logueado:" ,response.id)
      this.sendForm.emit(response);

    } else if(tipo=="registro"){
      console.log("Estas registrandote", planet.username)
      const response = await this.auth.registro(planet)
      console.log(response)
      this.sendForm.emit(response);
    }

   //const response = await this.auth.login(this.formulario.value)
  //  this.sendForm.emit(response);

  }

}
