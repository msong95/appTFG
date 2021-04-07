import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PreguntasComponent } from './components/preguntas1/preguntas.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HomePreguntasComponent } from './components/home-preguntas/home-preguntas.component';
import { Preguntas2Component } from './components/preguntas2/preguntas2.component';
import { Preguntas3Component } from './components/preguntas3/preguntas3.component';
import { Preguntas4Component } from './components/preguntas4/preguntas4.component';
import { Preguntas5Component } from './components/preguntas5/preguntas5.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PreguntasComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    HomePreguntasComponent,
    Preguntas2Component,
    Preguntas3Component,
    Preguntas4Component,
    Preguntas5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
