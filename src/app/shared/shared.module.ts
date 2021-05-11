import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [FormularioComponent, PreguntasComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormularioComponent, PreguntasComponent, DashboardComponent],
  providers: [AuthService]
})
export class SharedModule { }
