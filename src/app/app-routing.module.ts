import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
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
    path: 'preguntas', component: PreguntasComponent
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
