// ContentChild, possibilita passar atributos aos filhos e acessá-los
// AfterContentInit

import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms'




@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit  {

  input: any
  @Input() label: string
  @Input() errorMessage: string

  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  // É chamado apenas quando o conteúdo for definido
  ngAfterContentInit(){
    this.input = this.model || this.control
    if (this.input === "undefined") {
        throw new Error('Esse componente precisa ser utilizado com a diretiva ngModel ou formControlName')
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
