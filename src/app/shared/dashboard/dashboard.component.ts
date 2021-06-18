import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { Brecha } from 'src/app/models/brecha.model';
import { AuthService } from 'src/app/services/auth.service';
import { BrechasService } from 'src/app/services/brechas.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public userLogged: any;
  private token: string = localStorage.getItem('token');
  listado
  brecha:any

  constructor(
    public router: Router,
    private serviceBrecha: BrechasService,
    private authService: AuthService
    ) {

   }


  ngOnInit(): void {
    const user: any = jwt_decode(this.token)
    this.userLogged = user.user
  }


  preguntasHome() {
    this.router.navigate(['/preguntasHome'])
  }
}
