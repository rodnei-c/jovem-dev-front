import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { CadastroUsuarioModule } from './features/cadastro-usuario/cadastro-usuario.module';
import { ListagemUsuarioModule } from './features/listagem-usuario/listagem-usuario.module';
import { LayoutModule } from "../layout/layout.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CadastroUsuarioModule,
    ListagemUsuarioModule,
    LayoutModule,
    FormsModule
]
})
export class UsuarioModule { }
