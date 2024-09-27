import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesaRoutingModule } from './mesa-routing.module';
import { MesaComponent } from './mesa.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';


@NgModule({
  declarations: [
    MesaComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    MesaRoutingModule
  ]
})
export class MesaModule { }
