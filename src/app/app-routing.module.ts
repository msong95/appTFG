import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePreguntasComponent } from './components/home-preguntas/home-preguntas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
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
    path: '**', redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
