import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import { LayoutModule } from "../../../layout/layout.module";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule
]
})
export class CadastroUsuarioModule { }
