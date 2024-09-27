import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';


@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
