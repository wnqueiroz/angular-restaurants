import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RestaurantsServices } from '../restaurants/restaurants.service'
import { Restaurant } from '../restaurants/restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})

export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  // Activated Route fornece qual rota foi aciona e quais são os seus parâmetros
  constructor(private restaurantsServices: RestaurantsServices,
              private route : ActivatedRoute) { }

  ngOnInit() {
    // Snapshot é como se fosse uma foto do momento do acesso de como estão o estado dos parâmetros
    let id: string = this.route.snapshot.params['id']
    
    this.restaurantsServices.restaurantById(id)
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
