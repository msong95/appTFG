import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormContent, Inputs } from 'src/app/interfaces/formContent.interface';

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

  constructor() {
    this.sendForm = new EventEmitter()
   }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    const inputs = this.formContent.inputs;
    console.log(inputs)
    inputs.forEach((input: Inputs) => {
      this.inputForms[input.data.id] = new FormControl('',input.data.validators)
    });
    this.formulario = new FormGroup(this.inputForms)

  }

  onSubmit(){
    this.sendForm.emit(this.formulario.value)
  }

}
