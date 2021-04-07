import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Preguntas } from 'src/app/models/preguntas.model';
import {  PREGUNTAS_PAG_4 } from '../../mocks/preguntas.mock';
@Component({
  selector: 'app-preguntas4',
  templateUrl: './preguntas4.component.html',
  styleUrls: ['./preguntas4.component.css']
})
export class Preguntas4Component implements OnInit {
  preguntas4Form: FormGroup;
  @Input() preguntas: Preguntas[];
  preguntasPadre4: Preguntas[] = PREGUNTAS_PAG_4;
  inputForm: any={}

  constructor() { 
    const inputs=this.preguntasPadre4
    inputs.forEach((element: any)=>{
        element.respuestas.forEach(e => {
          this.inputForm[e.id] = new FormControl()
        });
        
    })
    this.initializeForm()
    
  }
  
  initializeForm(){
    this.preguntas4Form = new FormGroup(this.inputForm)
  }

  ngOnInit(): void {
  }

  onSubmit(){
      
  }
}
