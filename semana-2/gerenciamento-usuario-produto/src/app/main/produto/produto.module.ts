import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { CadastroProdutoModule } from './features/cadastro-produto/cadastro-produto.module';
import { ListagemProdutoModule } from './features/listagem-produto/listagem-produto.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    CadastroProdutoModule,
    ListagemProdutoModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
