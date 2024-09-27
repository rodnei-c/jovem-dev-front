
import { Component, OnInit } from '@angular/core';
import { AlbumService } from './services/album.service';
import { Album } from '../model/Album';
import { Router } from '@angular/router';
import { Photo } from '../model/Photo';
import { PhotoService } from '../photo/services/photo.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent implements OnInit{

  albuns: Array<Album> = [];

  constructor(private service: AlbumService,
              private photoService: PhotoService
  ){}


  ngOnInit(): void {
    // for(var i = 1; i <= 100; i++){
      this.service.buscarTodosAlbuns().subscribe(values => {
        this.albuns = values;
        this.albuns.forEach(e => this.photoService.buscarPorAlbumId(e.id!).subscribe(
          foto => { e.thumbnail = Object.values(foto).shift() }
        ))
      });
//    }
    //this.service.buscarTodosAlbuns().forEach(e => this.albuns.push(e));
  }

}
