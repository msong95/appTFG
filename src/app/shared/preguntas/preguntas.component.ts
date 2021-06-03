import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PREGUNTAS } from 'src/app/mocks/preguntas.mock';
import { TotalPreguntas } from 'src/app/models/preguntas.model';
import { CalculateResultService } from 'src/app/services/calculate-result.service';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  paginador: number;
  paginaActual = 1;
  preguntasActuales;
  //@Input() preguntas: TotalPreguntas;
  preguntas: any;
  private paginasPreguntas: string[];
  respuestas: any;
  suma: number=0;
  @ViewChild('formulario') formulario: ElementRef;

  constructor(public router: Router, private preguntasService: PreguntasService, private calculateService: CalculateResultService) {}

  async ngOnInit() {
    this.preguntas = await this.preguntasService.getAll()
    this.paginasPreguntas = Object.keys(this.preguntas);
    this.paginador = this.paginasPreguntas.length;
    this.preguntasActuales = this.preguntas[this.paginasPreguntas[0]]
   console.log(this.preguntasActuales)
  }


3
  changePage(change) {

    if (this.paginaActual <= this.paginador) {
      if (change === 'next') {
         this.suma=this.suma+this.calculateService.forPreguntas(this.preguntasActuales)
        this.paginaActual++;
        this.preguntasActuales = this.preguntas[this.paginasPreguntas[this.paginaActual - 1]]
      } else {
        this.paginaActual--;
        this.preguntasActuales = this.preguntas[this.paginasPreguntas[this.paginaActual - 1]]
      }
    }
    //console.log(this.formulario.nativeElement.value)
  }
  caculateLevel() {
         console.log("El total es: ",this.suma)

  }
  }

