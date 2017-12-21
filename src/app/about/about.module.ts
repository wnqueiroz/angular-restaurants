// Para transformar a classe num módulo
import { NgModule } from '@angular/core'

import { AboutComponent } from './about.component'

import { RouterModule, Routes } from '@angular/router'

// Informar qual é o componente padrão que será carregado ao acessar
const ROUTES: Routes = [
  {path: '', component: AboutComponent}
]

//  declarations lista os componentes que o módulo terá acesso
@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})

export class AboutModule {

}
