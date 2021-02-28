import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Preguntas } from 'src/app/models/preguntas.model';
import {  PREGUNTAS_PAG_2 } from '../../mocks/preguntas.mock';

@Component({
  selector: 'app-preguntas2',
  templateUrl: './preguntas2.component.html',
  styleUrls: ['./preguntas2.component.css']
})
export class Preguntas2Component implements OnInit {
  
  preguntas2Form: FormGroup;
  @Input() preguntas: Preguntas[];
  preguntasPadre2: Preguntas[] = PREGUNTAS_PAG_2;
  inputForm: any={}
  extension:boolean =false
  extension1:boolean =false
  extension2:boolean =false

  constructor() {

   }

  ngOnInit()  {
    const inputs=this.preguntasPadre2
    inputs.forEach((element: any)=>{
        element.respuestas.forEach(e => {
          this.inputForm[e.id] = new FormControl()
        });
        
    })
    this.initializeForm()
  }

  initializeForm(){
    this.preguntas2Form = new FormGroup(this.inputForm)
  }

  onSubmit(){
      
  }
  
  onChange(id){
    if (id=="respuesta_1")  {
        this.extension=!this.extension
    }else if(id=="respuesta_2")
    {
        this.extension1=!this.extension1

    }else if(id=="respuesta_3"){
      this.extension2=!this.extension2

    }
      
}
}
