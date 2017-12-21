/*  Input: Sempre que um component parent for informar o valor do atributo
    Deve-se marcá-lo com o decorator @Input()
*/
/*  EventEmitter: Propriedade responsável por disparar o evento
    Output:       Propriedade responsável pela saída do evento
*/

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem }  from "./menu-item.model";

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem : MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    // Irá informar ao component parent que o evento foi disparado, que o botão "adicionar" foi clicado
    this.add.emit(this.menuItem)
  }

}
