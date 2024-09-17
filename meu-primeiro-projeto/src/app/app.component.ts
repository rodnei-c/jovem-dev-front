import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'meu-primeiro-projeto';

  nomes = ''

  clienteNomes = [];

  adicionar(nome: string){
    console.log(nome);
    this.nomes = nome;
    this.clienteNomes.push(this.nomes);
  }

  // clientes = [
  //   { nome: 'Odair' },
  //   { nome: 'João' },
  //   { nome: 'Zé' },
  //   { nome: 'Ana'}
  // ]

  // procurar = '';

  // trocarTitulo(titulo: string){
  //   this.title = titulo;
  // }

  // eventEmit(search: string){
  //   this.procurar = search;
  // }
}
