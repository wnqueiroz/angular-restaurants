import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RestaurantsServices } from '../../restaurants/restaurants.service'
import { Restaurant } from '../../restaurants/restaurant/restaurant.model'
import { MenuItem } from '../../restaurant-detail/menu-item/menu-item.model'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantsServices: RestaurantsServices,
              private route : ActivatedRoute) { }

  ngOnInit() {
      let id : string = this.route.parent.snapshot.params['id']

      this.menu = this.restaurantsServices.menuOfRestaurants(id)
  }
  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
