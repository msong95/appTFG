import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preguntas2',
  templateUrl: './preguntas2.component.html',
  styleUrls: ['./preguntas2.component.css']
})
export class Preguntas2Component implements OnInit {
  preguntas2Form: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }

  initializeForm(){
    this.preguntas2Form = new FormGroup(
      {
        respuestaA: new FormControl(),
        respuestaB: new FormControl(),
        respuestaC: new FormControl()
      }
    )
  }

  mostrarPregunta4(event): void {
   if (event.target.checked){
    
   }
  
  }
}
