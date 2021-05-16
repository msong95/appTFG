import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormContent, Inputs } from 'src/app/interfaces/formContent.interface';
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

  constructor(
    private auth: AuthService
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
    // console.log(this.formulario.value)
    // const response = await this.auth.login(this.formulario.value)
    this.sendForm.emit(this.formulario.value);
    this.formulario.reset()
  }

}
