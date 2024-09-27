import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RestauranteComponent } from './main/restaurante/restaurante.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ReservaComponent } from './main/reserva/reserva.component';
import { FuncionarioComponent } from './main/funcionario/funcionario.component';
import { ClienteComponent } from './main/cliente/cliente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RestauranteComponent,
    DashboardComponent,
    ReservaComponent,
    FuncionarioComponent,
    ClienteComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
