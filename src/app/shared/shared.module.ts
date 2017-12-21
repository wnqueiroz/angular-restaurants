// ModuleWithProviders permite carregar módulos uma hora com os providers, outra hora sem

import {NgModule, ModuleWithProviders} from '@angular/core'

// Importação dos componentes necessários para o Módulo Shared
import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'

// Importação dos módulos necessários para o Módulo Shared
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

// Importação dos Serviços que serão compartilhados
import {RestaurantsServices} from '../restaurants/restaurants.service'
import {ShoopingCartServices} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {OrderServices} from '../order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component'

// imports recebe as depedências necessárias para o Módulo Shared
/* exports recebe o que será compartilhado do Módulo Shared,
   aos módulos que importarem esse modulo, não será necessário importare
   FormsModule, ReactiveFormsModule e CommonModule
*/
@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
            FormsModule, ReactiveFormsModule, CommonModule]
})

export class SharedModule{
  static forRoot() : ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RestaurantsServices, ShoopingCartServices, OrderServices]
    }
  }
}
