import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
  // },
  {
    path: '',
    loadChildren: () => import('./main/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./main/restaurante/restaurante.module').then((m) => m.RestauranteModule)
  },
  {
    path: 'mesa',
    loadChildren: () => import('./main/mesa/mesa.module').then((m) => m.MesaModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./main/reserva/reserva.module').then((m) => m.ReservaModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./main/cliente/cliente.module').then((m) => m.ClienteModule)
  },
  {
    path: 'funcionario',
    loadChildren: () => import('./main/funcionario/funcionario.module').then((m) => m.FuncionarioModule)
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
