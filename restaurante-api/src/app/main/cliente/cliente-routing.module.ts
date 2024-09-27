import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  { path: '', component: ClienteComponent,
    children: [
      { path: 'cadastro', component: CadastroComponent },
      { path: 'listagem', component: ListagemComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
