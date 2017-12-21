import { Component, OnInit } from '@angular/core';
/* Para utilizar as funções de animções é necessário importá-las */
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [ /* Para utilizar as animações é necessário essa propriedade */
    trigger('snack-visibility', [ /* ativa a animação */
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('300ms 0s ease-in')), /* animate('tempo delay ease')*/
      transition('visible => hidden', animate('300ms 0s ease-out')) /* animate('tempo delay ease')*/
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message:string = 'Hello there!'
  snackVisibility:string = 'hidden'

  constructor() { }

  ngOnInit() {
  }

  // toggleSnack(){
  //   this.snackVisibility = this.snackVisibility === 'hidden' ? 'visible' : 'hidden'
  // }

}
