import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePreguntasComponent } from './components/home-preguntas/home-preguntas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PreguntasComponent } from './components/preguntas1/preguntas.component';
import { Preguntas2Component } from './components/preguntas2/preguntas2.component';
import { Preguntas3Component } from './components/preguntas3/preguntas3.component';
import { Preguntas4Component } from './components/preguntas4/preguntas4.component';
import { Preguntas5Component } from './components/preguntas5/preguntas5.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo:'/home'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'preguntasHome', component: HomePreguntasComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'preguntas1', component: PreguntasComponent
  },
  {
    path: 'preguntas2', component: Preguntas2Component
  },
  {
    path: 'preguntas3', component: Preguntas3Component
  },
  {
    path: 'preguntas4', component: Preguntas4Component
  },
  {
    path: 'preguntas5', component: Preguntas5Component
  },
  {
    path: '**', redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
