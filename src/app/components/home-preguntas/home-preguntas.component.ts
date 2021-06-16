import { Component, OnChanges, OnInit } from '@angular/core';
import { PREGUNTAS } from 'src/app/mocks/preguntas.mock';
import { Pregunta, TotalPreguntas } from 'src/app/models/preguntas.model';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-home-preguntas',
  templateUrl: './home-preguntas.component.html',
  styleUrls: ['./home-preguntas.component.css']
})
export class HomePreguntasComponent implements OnChanges {

  preguntas: Pregunta[];

  constructor(private preguntasService: PreguntasService) {
    this.preguntas = []
  }

  async ngOnInit() {
      this.preguntas = await this.preguntasService.getAll()

  }

  ngOnChanges(){
  }

}
