import { Component, OnInit } from '@angular/core';
import { PREGUNTAS } from 'src/app/mocks/preguntas.mock';
import { Preguntas, TotalPreguntas } from 'src/app/models/preguntas.model';

@Component({
  selector: 'app-home-preguntas',
  templateUrl: './home-preguntas.component.html',
  styleUrls: ['./home-preguntas.component.css']
})
export class HomePreguntasComponent implements OnInit {

  preguntas: TotalPreguntas = PREGUNTAS;


  constructor() { }

  ngOnInit(): void {
  }

}
