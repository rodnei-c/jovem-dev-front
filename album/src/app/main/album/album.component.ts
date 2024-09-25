
import { Component, OnInit } from '@angular/core';
import { AlbumService } from './services/album.service';
import { Album } from '../model/Album';
import { Router } from '@angular/router';
import { Photo } from '../model/Photo';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent implements OnInit{

  albuns: Array<Album> = [];
  fotos: Array<Photo> = [];

  constructor(private service: AlbumService,
              private route: Router
  ){}


  ngOnInit(): void {
    for(var i = 1; i <= 100; i++){
      this.service.buscarPorId(i).subscribe(values=> {
        this.albuns.push(values);
      });
    }
    //this.service.buscarTodosAlbuns().forEach(e => this.albuns.push(e));
    this.service.buscarTodasFotos().forEach(e => this.fotos.push(e));
    console.log(this.albuns);
  }

}
