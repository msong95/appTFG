import { ValidatorFn } from "@angular/forms";

export interface FormContent {
  formTitle: string;
  classTitle?:string;
  buttonText: string;
  buttonClass: string;
  btnBlock:boolean;

  inputs: Inputs[];
}

export interface Inputs {
  title: string;
  tooltip: string;
  data: {
    validators?: ValidatorFn[];
    type: string,
    id: string
  }
}
