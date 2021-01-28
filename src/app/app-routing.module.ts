import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo:'/login'
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
    path: '**', redirectTo: '/login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
