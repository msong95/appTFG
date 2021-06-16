import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { Brecha } from 'src/app/models/brecha.model';
import { BrechasService } from 'src/app/services/brechas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  private router: Router;
  listado 
  brecha:any
  
  constructor( router: Router,private serviceBrecha: BrechasService) {
    this.router= router;
  

   }


  ngOnInit(): void {
  }

  
  preguntasHome() {
    this.router.navigate(['/preguntasHome'])
  }
}
