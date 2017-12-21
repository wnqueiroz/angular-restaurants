/*  Importando módulo de animações */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { BrowserModule } from '@angular/platform-browser';

/*  LOCALE_ID, usado para a intercionalização de moeda */
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
// PreloadAllModules é uma estratégia de pré-carregamento dos módulos em background, rodando em outra thread
import { RouterModule, PreloadAllModules } from '@angular/router';

/* Importação para a validação e utilização de formulários, necessário informar
em imports: []
*/
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// Importando as Rotas
import {ROUTES} from './app.routes';
// Importando os Componentes
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { OrderSummaryComponent } from './order-summary/order-summary.component';

// Importando o módulo compartilhado
import {SharedModule} from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule.forRoot(),
    // Importando as Rotas
    RouterModule.forRoot(ROUTES, {preloadingStrategy : PreloadAllModules}), // Para utilizar o PreloadAllModules, é necessário informar no import das rotas a estratégia de carregamento
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}], // Os serviços devem ser inseridos na lista de providers
  bootstrap: [AppComponent]
})
export class AppModule { }
