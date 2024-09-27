import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './main/layout/layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './main/core/api-interceptor';
import { AlbumComponent } from './main/album/album.component';
import { PhotoComponent } from './main/photo/photo.component';
import { AlbumModule } from './main/album/album.module';
import { PhotoModule } from './main/photo/photo.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AlbumComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlbumModule,
    PhotoModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
