import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormContent, Inputs } from 'src/app/interfaces/formContent.interface';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() formContent: FormContent;
  @Output() sendForm;

  inputForms: any = {};
  formulario: FormGroup;

  constructor(private auth: AuthService) {
    this.sendForm = new EventEmitter();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    const inputs = this.formContent.inputs;

    inputs.forEach((input: Inputs) => {
      this.inputForms[input.data.id] = new FormControl(
        input.value,
        input.data.validators
      );
      //console.log(input.data.id)
    });
    this.formulario = new FormGroup(this.inputForms);

    if(this.formContent.id === 'modificar'){
      this.formulario.controls['email'].disable();
    }
    // let tipo = String(this.formContent.id);
    // // console.log(tipo)
    // let usuario = JSON.parse(localStorage.getItem('usuario'));
    // //console.log("datos",usuario)

    // if (tipo == 'modificar') {
    //   //   (document.getElementById("email") as HTMLInputElement)
    //   this.formulario.controls['email'].disable();
    //   this.formulario.setValue({
    //     username: '',
    //     email: usuario.email,
    //     password: usuario.password,
    //     repite_password: usuario.password
    //   });
    // }
  }

  async onSubmit() {
    if(this.formulario.value?.repite_password && this.formulario.value?.password !== this.formulario.value?.repite_password){
      Swal.fire('Error','Las contraseñas no coinciden','error')
    } else {
      this.sendForm.emit(this.formulario.value);
    }
  }
}
