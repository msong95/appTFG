import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PREGUNTAS } from 'src/app/mocks/preguntas.mock';
import { TotalPreguntas } from 'src/app/models/preguntas.model';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  paginador: number;
  paginaActual = 1;
  preguntasActuales;
  @Input() preguntas: TotalPreguntas;
  private paginasPreguntas: string[];


  constructor(public router: Router) {}

  ngOnInit(): void {
    this.paginasPreguntas = Object.keys(this.preguntas);
    this.paginador = this.paginasPreguntas.length;
    this.preguntasActuales = this.preguntas[this.paginasPreguntas[0]]
  }

  changePage(change) {
    if (this.paginaActual <= this.paginador) {
      if (change === 'next') {
        this.paginaActual++;
        this.preguntasActuales = this.preguntas[this.paginasPreguntas[this.paginaActual - 1]]
      } else {
        this.paginaActual--;
        this.preguntasActuales = this.preguntas[this.paginasPreguntas[this.paginaActual - 1]]
      }
    }
  }

  caculateLevel() {
  }
}
