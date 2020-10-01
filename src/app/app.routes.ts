import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component'
import {MenuComponent} from './restaurant-detail/menu/menu.component'
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component'

// Lazy Loading: loadChildren: '<dir>/<module>#<component>'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurant/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'}, // caso o caminho for /restaurant/:id/, rota padrão
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
  },
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'order-summary', component: OrderSummaryComponent}
]
