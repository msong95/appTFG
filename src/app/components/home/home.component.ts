import { Component, OnInit } from '@angular/core';
import { PreguntasService } from 'src/app/services/preguntas.service';
import * as Cookies from 'js-cookie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: PreguntasService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      response => console.log(response),
      error => console.log(error)
    )

  }

}
