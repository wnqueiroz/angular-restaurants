import { Injectable } from '@angular/core'
import { ShoopingCartServices } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'
import { Order, OrderItem } from './order.model'
import { Observable } from 'rxjs/Observable'


import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'
import { MEAT_API } from '../app.api'

@Injectable()
export class OrderServices {

  constructor(private shoppingCartService: ShoopingCartServices, private http: Http){}


  cartItens(): CartItem[]{
    return this.shoppingCartService.items
  }
  increaseQty(item: CartItem){
    this.shoppingCartService.increaseQty(item)
  }
  decreaseQty(item: CartItem){
    this.shoppingCartService.decreaseQty(item)
  }
  removeItem(item: CartItem){
    this.shoppingCartService.removeItem(item)
  }

  itensValues(): number{
    return this.shoppingCartService.total()
  }
  clear(): void {
    return this.shoppingCartService.clear()
  }

  // Quando enviamos dados ao servidor, precisamos informar os Headers da requisição
  checkOrder(order: Order): Observable<string>{
    const headers = new Headers()
    // passamos o nome do header, e informamos o formato que estamos enviando
    headers.append('Content-Type', 'application/json')
    // representação textual do objeto
    return this.http.post(`${MEAT_API}/orders`,
                           JSON.stringify(order),
                           new RequestOptions({headers: headers}))
                    .map(response=> response.json())
                    .map(order => order.id)
  }
}
