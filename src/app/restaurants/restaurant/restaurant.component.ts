import { Component, OnInit, Input } from '@angular/core';

// Importando a interface de auxílio
import {Restaurant} from './restaurant.model'


@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
