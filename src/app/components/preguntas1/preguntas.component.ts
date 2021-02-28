import { Component, OnInit, Input } from '@angular/core';
import { Preguntas } from 'src/app/models/preguntas.model';
import { PREGUNTAS_PAG_1, PREGUNTAS_PAG_2 } from '../../mocks/preguntas.mock';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  @Input() preguntas: Preguntas[];
  preguntasPadre: Preguntas[] = PREGUNTAS_PAG_1;

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.preguntas)
  }

  onChange(){
    console.log('ola k ase')
  }

}
