import { Component, OnInit, Input } from '@angular/core';
import { Preguntas } from 'src/app/models/preguntas.model';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  @Input() preguntas: Preguntas[];

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.preguntas)
  }

  onChange(){
    console.log('ola k ase')
  }

}
