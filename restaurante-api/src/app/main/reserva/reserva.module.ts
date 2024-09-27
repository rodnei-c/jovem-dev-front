import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';


@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule
  ]
})
export class ReservaModule { }
