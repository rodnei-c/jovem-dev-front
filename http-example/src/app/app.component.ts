import { Component, OnInit } from '@angular/core';
import { HttpExampleService } from './main/services/http-example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'http-example';

  constructor(private service: HttpExampleService){}

  ngOnInit(): void {
    this.service.buscarTodosPosts().subscribe(values => {
      console.log(values);
    });
    this.service.buscarPorId(1).subscribe(values => {
      console.log('buscando por id: ', values);
    });
    this.service.buscarPorQueryParam(2).subscribe(values => {
      console.log('buscando por query Param: ', values);
    });
    this.service.salvarPost().subscribe(values => {
      console.log('salvando post: ', values);
    });
    this.service.editarPost(1).subscribe(values => {
      console.log('editando post 1: ', values);
    });
    this.service.deletePost(2).subscribe(values => {
      console.log('deletou post 2: ', values);
    });

  }
}
