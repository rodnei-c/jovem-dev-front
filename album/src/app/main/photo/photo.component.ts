import { AlbumService } from './../album/services/album.service';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';
import { Photo } from '../model/Photo';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../model/Album';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent implements OnInit{

  photos?: Array<Photo>;
  albumId?: number;
  album!: Album;

  constructor(private service: PhotoService,
              private albumService: AlbumService,
              private activatedRoute: ActivatedRoute
  ){
    activatedRoute.params.subscribe( params => {
      this.albumId = params['albumId'];
    })
  }

  ngOnInit(): void {

    this.service.buscarPorAlbumId(1).subscribe(values=> {
      this.photos = values;

  })
}

}
