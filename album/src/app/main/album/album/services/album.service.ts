import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  buscarTodosAlbuns(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums').pipe(take(1));
  }

  buscarPorId(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/${id}`).pipe(take(1))
  }
}
