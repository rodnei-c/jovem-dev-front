import { Component } from '@angular/core';
import { Client } from './models/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'meu-primeiro-projeto';

  clients: Array<Client> = []

  adicionar(client: Client){
    console.log(client);
    this.clients.push(client);
    console.log(this.clients.length);
  }

  editar(){

  }

  deletar(id?: number){
    this.clients.filter(e => e.id !== id);
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
