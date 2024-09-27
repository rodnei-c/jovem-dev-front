import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Album } from '../../model/Album';
import { Photo } from '../../model/Photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  buscarTodosAlbuns(){
    return this.http.get<Array<Album>>('https://jsonplaceholder.typicode.com/albums').pipe(take(1));
  }

  buscarPorId(id: number) {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`).pipe(take(1));
  }

  buscarTodasFotos(){
    return this.http.get<Photo>('https://jsonplaceholder.typicode.com/photos').pipe(take(1));
  }

  buscarFotosPorAlbumId(id: number){
    return this.http.get<Array<Photo>>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).pipe(take(1));
  }
}
