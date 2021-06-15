import { Component, OnInit } from '@angular/core';
import { CalculateResultService } from 'src/app/services/calculate-result.service';

@Component({
  selector: 'app-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.css']
})
export class FinalResultComponent implements OnInit {
  lista:any;
  constructor(private calculateService: CalculateResultService) { }

  async ngOnInit() {
    this.lista= await this.calculateService.getResultados();
    console.log(this.lista)

 
  }
  

}
