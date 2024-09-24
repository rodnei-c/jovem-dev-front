import { Injectable } from '@angular/core';
import { Produto } from '../../models/Produto';
import { Subject, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // tunnedObservable$ = new Subject<string>();

// Construtor:  private http: HttpClient


  produtos: Array<Produto> = [];
  count = 0;

  constructor(){}
  // buscarUsuario(){
  //   return this.http.get('', { params: { post: 1 } }).pipe;
  // }

  // deletarPosts(id: number){
  //   return this.http.delete(``).pipe(take(1));
  // }

  // emitEvent(value: string){
  //   this.tunnedObservable$.next(value);
  // }

  cadastrar(produto: Produto){
    produto.id = this.count;
    this.produtos.push(produto);
    this.count++;
  }

  excluirProduto(id: number){
    this.produtos = this.produtos.filter(e => e.id != id);
  }

  editarProduto(produtoCadastrado: Produto){
    this.produtos.forEach(produtos => {
      if(produtos.id === produtoCadastrado.id) {
        produtos.name = produtoCadastrado.name;
        produtos.estoque = produtoCadastrado.estoque;
        produtos.preco = produtoCadastrado.preco;
      }
    });
    console.log(this.produtos);
  }

  findById(id: number){
    return this.produtos.find(produtos => produtos.id == id);
  }

  getList(){
    return this.produtos;
  }
}
