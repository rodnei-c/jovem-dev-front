import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { CadastroProdutoComponent } from './features/cadastro-produto/cadastro-produto.component';
import { ListagemProdutoComponent } from './features/listagem-produto/listagem-produto.component';

const routes: Routes = [
  { path: '',  component: ProdutoComponent,
    children: [
      { path: 'cadastro', component: CadastroProdutoComponent },
      { path: '', component: ListagemProdutoComponent}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
