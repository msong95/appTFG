import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Cookies from 'js-cookie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logged = localStorage.getItem('token') ? true : false
  }

  public logout(){
    localStorage.removeItem('token');
    this.logged = false;
    this.router.navigate(['/login'])
  }

}
