import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Preguntas } from 'src/app/models/preguntas.model';
import {  PREGUNTAS_PAG_3 } from '../../mocks/preguntas.mock';
@Component({
  selector: 'app-preguntas3',
  templateUrl: './preguntas3.component.html',
  styleUrls: ['./preguntas3.component.css']
})

export class Preguntas3Component implements OnInit {
  preguntas3Form: FormGroup;
  @Input() preguntas: Preguntas[];
  preguntasPadre3: Preguntas[] = PREGUNTAS_PAG_3;
  inputForm: any={}
  constructor() { }

  ngOnInit(): void {
    const inputs=this.preguntasPadre3
    inputs.forEach((element: any)=>{
        element.respuestas.forEach(e => {
          this.inputForm[e.id] = new FormControl()
        });
        
    })
    this.initializeForm()
  }

  
  initializeForm(){
    this.preguntas3Form = new FormGroup(this.inputForm)
  }

  onSubmit(){
      
  }

}
