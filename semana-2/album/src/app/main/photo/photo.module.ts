import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    HttpClientModule
  ]
})
export class PhotoModule { }
