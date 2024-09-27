import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Photo } from '../../model/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  buscarTodasFotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(take(1));
  }

  buscarPorId(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos/${id}`).pipe(take(1));
  }

  buscarPorAlbumId(id: number){
    return this.http.get<Array<Photo>>(`https://jsonplaceholder.typicode.com/photos`, { params: { albumId: id.toString() } }).pipe(take(1));
  }
}
