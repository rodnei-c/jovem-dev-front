import { Component, OnInit } from '@angular/core';
import { AlbumService } from './main/album/services/album.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

   constructor(private service: AlbumService) {}

   ngOnInit(): void {

   }

}
