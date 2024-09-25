import { Component, OnInit } from '@angular/core';
import { AlbumService } from './services/album.service';
import { Album } from '../model/Album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent implements OnInit{

  albuns: Array<any> =[];
  contador: number = 0;

  constructor(private service: AlbumService){}


  ngOnInit(): void {
    for(var i = 1; i <= 100; i++){
      this.service.buscarPorId(i).subscribe(values=> {
        this.albuns.push(values);
      });
    }
    console.log(this.albuns);
  }

}
