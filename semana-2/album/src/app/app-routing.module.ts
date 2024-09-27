import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './main/album/album.component';

const routes: Routes = [

  { path: '',
    loadChildren: () => import('./main/album/album.module').then((m) => m.AlbumModule)
   },

   {
    path: 'photos',
    loadChildren: () => import('./main/photo/photo.module').then((m) => m.PhotoModule)
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
