import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';
import { Photo } from '../model/Photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent implements OnInit{

  photos: Array<Photo> = [];
  contador: number = 0;

  constructor(private service: PhotoService){}

  ngOnInit(): void {

    for(var i = 1; i <= 100; i++){
      this.service.buscarPorId(i).subscribe(values=> {
        this.photos.push(values);
      });
    }
    console.log(this.photos);

  }

}
