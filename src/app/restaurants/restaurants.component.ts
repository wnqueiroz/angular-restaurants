import { Component, OnInit } from '@angular/core';

// Importando a interface de auxílio
import {Restaurant} from './restaurant/restaurant.model'

// Importando o serviço, para a injeção de dependência - 1°
import {RestaurantsServices} from './restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  // Injeção de dependência - 2°
  constructor(private restaurantsServices : RestaurantsServices) { }

  // Criado ao gerar o componente, é chamado uma vez no ciclo de vida do componente
  ngOnInit() {
    // atribui o valor obtido pelo serviço a variável do componente
    this.restaurantsServices.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
