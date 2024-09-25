import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './main/album/album/album.component';

const routes: Routes = [

  { path: '',
    loadChildren: () => import('./main/album/album/album.module').then((m) => m.AlbumModule)
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
