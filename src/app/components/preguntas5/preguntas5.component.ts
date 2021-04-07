
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Preguntas } from 'src/app/models/preguntas.model';
import {  PREGUNTAS_PAG_5 } from '../../mocks/preguntas.mock';
@Component({
  selector: 'app-preguntas5',
  templateUrl: './preguntas5.component.html',
  styleUrls: ['./preguntas5.component.css']
})
export class Preguntas5Component implements OnInit {
  preguntas5Form: FormGroup;
  @Input() preguntas: Preguntas[];
  preguntasPadre5: Preguntas[] = PREGUNTAS_PAG_5;
  inputForm: any={}

  constructor() { 
    const inputs=this.preguntasPadre5
    inputs.forEach((element: any)=>{
        element.respuestas.forEach(e => {
          this.inputForm[e.id] = new FormControl()
        });
        
    })
    this.initializeForm()

  }
  initializeForm(){
    this.preguntas5Form = new FormGroup(this.inputForm)
  }
  ngOnInit(): void {
  }

  onSubmit(){
      
  }
}
