import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model'
import { OrderServices } from './order.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'
import { Order, OrderItem } from './order.model'
import { Router } from '@angular/router'

// Para Reactives Form
import { FormGroup,FormBuilder, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})


export class OrderComponent implements OnInit {

  orderForm: FormGroup
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/
  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label : "Dinheiro", value : "MON"},
    {label : "Cartão de Débito", value : "DEB" },
    {label : "Cartão Refeição", value : "REF" }
  ]


  constructor(private orderService: OrderServices,
              private router : Router,
              private formBuilder: FormBuilder
             ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo})
  }

  /* Essa função verifica se os campos de email e emailConfirmation são iguals
  @return {[key:string] : boolean}
  */
  static equalsTo(group: AbstractControl): {[key:string] : boolean}{
    // obtêm os objetos do grupo
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    // se não existirem dentro do grupo
    if(!email || !emailConfirmation){
      return undefined
    }
    // se os valores forem diferentes
    if (email.value !== emailConfirmation.value) {
        return {emailsNotMatch: true}
    }
    // se forem iguais
    return undefined
  }

  cartItens(): CartItem[]{
    return this.orderService.cartItens()
  }

  increaseQty(item: CartItem){
    return this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    return this.orderService.decreaseQty(item)
  }
  removeItem(item: CartItem){
    return this.orderService.removeItem(item)
  }

  itensValues(): number{
    return this.orderService.itensValues()
  }
  checkOrder(order: Order){

    order.orderItems = this.cartItens()
      .map((item: CartItem)=> new OrderItem(item.quantity, item.menuItem.id))

      // .subscribe(transformação do retorno) 'callback'
      this.orderService.checkOrder(order)
      // Para recebermos o retorno do Observable, precisamos 'inscrever-nos' no Observable através do subscribe
          .subscribe((orderId: string) => {
            this.router.navigate(['/order-summary'])
            this.orderService.clear()
          })
    console.log(order)
  }

}
