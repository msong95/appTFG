import { Component, Input, NgModule, OnInit } from '@angular/core';
import { brechas } from 'src/app/mocks/brechas.mock';
import { Brecha, totalBrecha } from 'src/app/models/brecha.model';
import{ jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { RouterModule } from '@angular/router';
import { BrechasService } from 'src/app/services/brechas.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {


  listado :Brecha[];

  constructor(private serviceBrecha: BrechasService) { }

  ngOnInit(): void {
    
  let usuario= JSON.parse(localStorage.getItem('usuario'))
  this.listado =this.serviceBrecha.convertirPromesa(usuario.email);
  console.log(this.listado)
  }

  generarPDF(id, brecha, fecha){
      const DATA = document.getElementById('htmlData');
      const doc = new jsPDF('p', 'pt', 'a4');
      const options = {
        background: 'green',
        scale: 3
      };

      doc.text("\n"+"\nID: " + id + "\n Descripción: " + brecha + "\n Fecha:" + fecha ,10,10);
      doc.save(`${new Date().toISOString()}_tutorial.pdf`);
  }

}
