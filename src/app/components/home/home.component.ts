import { Component, OnInit } from '@angular/core';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: PreguntasService) { }

  ngOnInit(): void {

  }

}
