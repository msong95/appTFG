import { Component, OnInit } from '@angular/core';
import { PREGUNTAS_PAG_1, PREGUNTAS_PAG_2 } from '../../mocks/preguntas.mock';
import { Preguntas } from 'src/app/models/preguntas.model';

@Component({
  selector: 'app-home-preguntas',
  templateUrl: './home-preguntas.component.html',
  styleUrls: ['./home-preguntas.component.css']
})
export class HomePreguntasComponent implements OnInit {

  preguntasPadre: Preguntas[] = PREGUNTAS_PAG_1;
 

  constructor() { }

  ngOnInit(): void {
  }

}
