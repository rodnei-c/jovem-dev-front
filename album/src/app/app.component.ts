import { AlbumService } from './main/services/album.service';
import { Component, OnInit } from '@angular/core';

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
