import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PREGUNTAS } from 'src/app/mocks/preguntas.mock';
import { TotalPreguntas } from 'src/app/models/preguntas.model';
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

  @ViewChild('formulario') formulario: ElementRef;

  constructor(public router: Router, private preguntasService: PreguntasService) {}

  async ngOnInit() {
    this.preguntas = await this.preguntasService.getAll()
    this.paginasPreguntas = Object.keys(this.preguntas);
    this.paginador = this.paginasPreguntas.length;
    this.preguntasActuales = this.preguntas[this.paginasPreguntas[0]]
   console.log(this.preguntas)
  }



  changePage(change) {

    
    if (this.paginaActual <= this.paginador) {
      if (change === 'next') {
        
        let clave = String((document.getElementById("respuesta_1_2") as HTMLInputElement).value);
        console.log(clave)
        this.paginaActual++;
        this.preguntasActuales = this.preguntas[this.paginasPreguntas[this.paginaActual - 1]]
      } else {
        this.paginaActual--;
        this.preguntasActuales = this.preguntas[this.paginasPreguntas[this.paginaActual - 1]]
      }
    }

    //console.log(this.formulario.nativeElement.value)
  }
}
