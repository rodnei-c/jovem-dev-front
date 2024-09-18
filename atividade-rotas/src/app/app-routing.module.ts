import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { ListagemComponent } from './component/listagem/listagem.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'lista', component: ListagemComponent},
  {
    path: 'funcionario',
    children: [
      { path: 'cadastro', component: CadastroComponent},
      { path: 'lista', component: ListagemComponent}
    ]
  },
  { path: 'cadastro/:id', component: CadastroComponent},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
