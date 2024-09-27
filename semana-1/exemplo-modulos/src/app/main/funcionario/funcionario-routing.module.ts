import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './funcionario.component';
import { CadastroFuncionarioComponent } from './features/cadastro-funcionario/cadastro-funcionario.component';
import { ListagemFuncionarioComponent } from './features/listagem-funcionario/listagem-funcionario.component';

const routes: Routes = [
  { path: '', component: FuncionarioComponent,
    children: [
      { path: 'cadastro', component: CadastroFuncionarioComponent },
      { path: '', component: ListagemFuncionarioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
