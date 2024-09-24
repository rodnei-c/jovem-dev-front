import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent implements OnInit{

  form!: FormGroup;
  posts: any;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private activatedRouter: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({name: 'Rivotril', estoque: 10, preco: 15})
    this.activatedRouter.params.subscribe(values => {
      values['id']

      const produto = this.produtoService.findById(values['id']);
      if(produto){
        this.form.patchValue(produto!);
      }
      console.log(produto);
    })
  }

  buildForm(){
    console.log(this);

    this.form = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      estoque: [0, Validators.required],
      preco: [0, Validators.required]
    });
  }

  validacaoEstoque(teste: FormGroup){
    console.log(teste)
    if (teste.value <= 0) {
      return { estoqueMinimo: 'Não pode valor vazio' };
    }
    return null
  }

  cadastrar(){
    const produtoCadastrado = this.form.getRawValue();
    if(produtoCadastrado.id || produtoCadastrado.id == 0) {
      this.produtoService.editarProduto(produtoCadastrado);
      this.route.navigateByUrl('produto/listagem')
    } else {
      this.produtoService.cadastrar(this.form.getRawValue());
      this.form.reset();
    }
  }

}
