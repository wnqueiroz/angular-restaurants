import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model'
/*  O Objetivo da importação e utilização dá-se ao registro do componente como um
    ValueAcessor para a utilização das diretivas de ngModel e dos ReactiveForms */
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]
  @Input() default: any
  value: any
  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value

    // this.findCheckedDefault()

    this.onChange(this.value)
  }
  writeValue(obj:any): void {
    this.value = obj
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any) : void{
  }

  findCheckedDefault():void{
    let foundOption = this.options.find((option) => option.checked != null)
    if(foundOption){
      delete foundOption.checked
    }
  }


}
