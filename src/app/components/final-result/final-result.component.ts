import { Component, OnInit } from '@angular/core';
import { Brecha } from 'src/app/models/brecha.model';
import { Resultado } from 'src/app/models/resultado.model';
import { BrechasService } from 'src/app/services/brechas.service';
import { CalculateResultService } from 'src/app/services/calculate-result.service';

@Component({
  selector: 'app-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.css']
})
export class FinalResultComponent implements OnInit {
  lista:any;

  resultadoFinal:Resultado;

  rangoTotal : number;
  constructor(private calculateService: CalculateResultService, private brechaService: BrechasService) { }

  async ngOnInit() {
    this.lista= await this.calculateService.getResultados();
   // console.log(this.lista)
    this.inicializar();
 
  }

   async inicializar(){

    let usuario= JSON.parse(localStorage.getItem('usuario'))
    let riesgo= localStorage.getItem('riesgo')
    this.rangoTotal= +riesgo
    const fecha = new Date(); 

    console.log(this.rangoTotal)
    this.resultadoFinal= this.calculateService.devolverResultadoFinal(this.lista,this.rangoTotal)

    let b: Brecha= new Brecha(usuario.email,  this.resultadoFinal.titulo,  this.resultadoFinal.descripcion, this.resultadoFinal.solucion , fecha.toLocaleDateString());
    const response = await this.brechaService.crearBrecha(b);

  //  console.log(resultado)


  }
  

}