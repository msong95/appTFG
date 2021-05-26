import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  private router: Router;
  constructor( router: Router) {
    this.router= router;

   }


  ngOnInit(): void {

  }

  
  preguntasHome() {
    this.router.navigate(['/preguntasHome'])
  }
}
