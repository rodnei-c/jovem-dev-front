import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCadastroComponent } from './component-cadastro/component-cadastro.component';
import { ComponentListagemComponent } from './component-listagem/component-listagem.component';

const routes: Routes = [
  { path: 'cadastro', component: ComponentCadastroComponent },
  { path: 'cadastro/:id', component: ComponentCadastroComponent },
  { path: 'teste', redirectTo: 'lista'},
  { path: 'lista', component: ComponentListagemComponent},
  { path: '', component: ComponentCadastroComponent },
  {
    path: 'lista',
    // component: ComponentListagemComponent,
    children: [
      { path: 'listagem', component: ComponentListagemComponent},
      { path: 'cliente', component: ComponentCadastroComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
