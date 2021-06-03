import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'


import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HomePreguntasComponent } from './components/home-preguntas/home-preguntas.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { environment } from './../environments/environment';
import { FinalResultComponent } from './components/final-result/final-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    HomePreguntasComponent,
    FooterComponent,
    FinalResultComponent,

  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
