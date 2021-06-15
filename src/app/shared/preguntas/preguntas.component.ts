import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PREGUNTAS } from 'src/app/mocks/preguntas.mock';
import { Brecha } from 'src/app/models/brecha.model';
import { TotalPreguntas } from 'src/app/models/preguntas.model';
import { BrechasService } from 'src/app/services/brechas.service';
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
  lista:any;
  private paginasPreguntas: string[];
  respuestas: any;
  suma: number=0;
  @ViewChild('formulario') formulario: ElementRef;

  constructor(public router: Router, private preguntasService: PreguntasService, private calculateService: CalculateResultService, private brechaService: BrechasService) {}

  async ngOnInit() {
    this.preguntas = await this.preguntasService.getAll()
    this.paginasPreguntas = Object.keys(this.preguntas);
    this.paginador = this.paginasPreguntas.length;
    this.preguntasActuales = this.preguntas[this.paginasPreguntas[0]]

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
  }
  async caculateLevel() {

    // console.log("Impacto:", this.suma)
     //console.log("Probabilidad", this.calculateService.calcularProbabilidad(this.preguntasActuales))
     //console.log("Riesgo total", this.calculateService.riesgoTotal(this.calculateService.calcularProbabilidad(this.preguntasActuales), this.suma))
    let probabilidad=this.calculateService.calcularProbabilidad(this.preguntasActuales)
    let totalRiesgo= this.calculateService.riesgoTotal(probabilidad, this.suma)
    let usuario= JSON.parse(localStorage.getItem('usuario'))
      let b: Brecha= new Brecha(usuario.email, totalRiesgo.toString() ,"solucion1","2021-03-23");
       const response = await this.brechaService.crearBrecha(b);
       this.router.navigate(['/resultadoFinal']);
      
  }
  }

 