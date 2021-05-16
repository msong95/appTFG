import { Component, Input, NgModule, OnInit } from '@angular/core';
import { brechas } from 'src/app/mocks/brechas.mock';
import { totalBrecha } from 'src/app/models/brecha.model';
import{ jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  preguntas: totalBrecha = brechas;

  constructor() { }

  ngOnInit(): void {

    console.log("se inicia las tablas");

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
      /*
      html2canvas(DATA, options).then((canvas) => {

        const img = canvas.toDataURL('image/PNG');

        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
        return doc;
      }).then((docResult) => {
        docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
      });
*/
  }

}
