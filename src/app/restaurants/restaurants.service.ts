import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'

import {Restaurant} from './restaurant/restaurant.model'

// Importação da classe que gerencia os retornos Http
import {Observable} from 'rxjs/Observable'

// Importação do client Http
import {Http} from '@angular/http'

// Importação de constante
import {MEAT_API} from '../app.api'

// Importação dos operadores usados na chamada do método Http
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

// Importação da classe para tratamento de erros
import {ErrorHandler} from '../app.error-handler'

/* Para uma classe de serviço receber um outro serviço, via injeção de dependência
é necessário marcar com o decorator @Injectable()
*/
import {Injectable} from '@angular/core'

@Injectable()
export class RestaurantsServices{

  constructor(private http: Http){}

  restaurants() : Observable<Restaurant[]>{
    return this.http.get(`${MEAT_API}/restaurants`) // a url http
      .map(response => response.json()) // mapeamento do que será retornado
      .catch(ErrorHandler.handleError) // Atribuição do método criado em ErrorHandler
  }

  restaurantById(id : string) : Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  reviewsOfRestaurant(id: string) : Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
  menuOfRestaurants(id : string) : Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}
