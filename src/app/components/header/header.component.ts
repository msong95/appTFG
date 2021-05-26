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
    if(this.logged==true){
      this.router.navigate(['/dashboard'])
    }
  }

  public logout(){
    localStorage.removeItem('token');
    this.logged = false;
    this.router.navigate(['/home'])
  }

}
