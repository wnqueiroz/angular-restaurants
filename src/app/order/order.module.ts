import {NgModule} from '@angular/core'

/* Para a criação das rotas do módulo */
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'

import {OrderComponent} from './order.component'
import {OrderItensComponent} from './order-itens/order-itens.component'
import {DeliveryCostsComponent} from './delivery-costs/delivery-costs.component'

// path: '' - rota principal
// component: OrderComponent - componente que será carregado na rota principal
const ROUTES: Routes = [
  {path: '', component: OrderComponent}
]


// em 'imports', precisa carregar o componente de rotas, junto com as rotas mapeadas em ROUTES
// usamos .forChild pois não estamos em módulo raiz

@NgModule({
  declarations:[OrderComponent,OrderItensComponent,DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

// Após isso é necessário configurar as rotas no app.routes.ts

export class OrderModule{}
