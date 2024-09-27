import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Produto } from '../../../models/Produto';
import { ProdutoService } from '../../services/produto.service';
import { filter, map, Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrl: './listagem-produto.component.scss'
})
export class ListagemProdutoComponent implements OnInit{

  form!: FormGroup;
  posts: any;
  produtos: Array<Produto> = [];
  contador: number = 1;
//  subs?: Array<Subscription> = [];

  constructor(private formBuilder: FormBuilder,
              private produtoService: ProdutoService,
              private router: Router
  ){
  // this.subs?.push(this.produtoService.tunnedObservable$.subscribe(value => console.log(value)))
    console.log(produtoService.getList());
}

  // ngOnDestroy(): void {
  //   console.log('OnDestroy')
  //   // this.subs?.forEach(Subscription => Subscription.unsubscribe());
  // }

  // observable$ = of([1, 2, 3, 4, 5]);
  // observabllePipe$ = of(1, 2, 3, 4, 5);
  // myObservable$ = new Observable(observer => {
  //   observer.next('Hello');
  //   observer.next('World');

  //   observer.complete();
  //});

  // tunnedObservable$ = new Subject<string>();


  ngOnInit(): void {
    // this.myObservable$.subscribe(value => console.log(value));
    // this.myObservable$.subscribe({
    //   next: value => console.log(value),
    //   error: err => console.error('Error: ', err),
    //   complete: () => console.log('Complete!')
    // });

    // this.observabllePipe$.pipe(
    //   filter(value => value % 2 == 0),
    //   map(value => value * 10)).subscribe(result => {
    //     console.log(result);
    //   });

    //   this.tunnedObservable$.subscribe(value => console.log('inscricao 01, ', value));
    //   this.tunnedObservable$.subscribe(value => console.log('inscricao 02, ', value))
    this.produtos = this.produtoService.getList();
    this.form.patchValue({ name: null, estoque: null, preco: null});
  }

  // emitValue() {
  //   this.tunnedObservable$.next(`${(Math.random() * 100).toFixed(0)}`);
  // }

  excluirProduto(produto: Produto) {
    this.produtoService.excluirProduto(produto.id!);
    this.atualizarListagem();
  }

  editarProduto(id: number) {
    this.router.navigateByUrl(`produto/cadastro/${id}`);
  }

  atualizarListagem(){
    this.produtos = this.produtoService.getList();
  }
}
