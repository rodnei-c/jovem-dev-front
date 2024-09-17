import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { ComponenteHeaderComponent } from './componente-header/componente-header.component';
import { ComponenteContentComponent } from './componente-content/componente-content.component';
import { FormsModule } from '@angular/forms';
import { ComponentCadastroComponent } from './component-cadastro/component-cadastro.component';
import { ComponentListagemComponent } from './component-listagem/component-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent,
    ComponenteHeaderComponent,
    ComponenteContentComponent,
    ComponentCadastroComponent,
    ComponentListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
