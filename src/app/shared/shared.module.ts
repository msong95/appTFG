import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [FormularioComponent, PreguntasComponent, DashboardComponent, TableComponent, UpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormularioComponent, PreguntasComponent, DashboardComponent],
  providers: [AuthService]
})
export class SharedModule { }
