import { Component, OnInit } from '@angular/core';
import { ShoopingCartServices } from './shopping-cart.service'


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoopingCartService : ShoopingCartServices) { }

  ngOnInit() {
  }

  items(): any{
    return this.shoopingCartService.items
  }

  total(): number{
    return this.shoopingCartService.total()
  }

  clear(){
    this.shoopingCartService.clear()
  }

  removeItem(item: any){
    this.shoopingCartService.removeItem(item)
  }

  addItem(item:any){
    this.shoopingCartService.addItem(item)
  }

}
