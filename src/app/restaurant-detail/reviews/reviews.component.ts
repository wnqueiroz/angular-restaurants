import { Component, OnInit } from '@angular/core';
import { RestaurantsServices } from '../../restaurants/restaurants.service'
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews : Observable<any>

  constructor(private restaurantsService : RestaurantsServices,
              private route : ActivatedRoute) { }

  ngOnInit() {
    /*  parent: indica que está buscando o elemento na rota 'pai', como no caso
        a rota de reviews é uma rota 'filha'
    */
    let id : string = this.route.parent.snapshot.params['id']

    this.reviews = this.restaurantsService.reviewsOfRestaurant(id)
  }

}
