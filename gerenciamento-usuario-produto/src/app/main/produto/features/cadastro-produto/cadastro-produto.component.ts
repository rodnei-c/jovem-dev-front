import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    // private produtoSerice: produtoService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({name: 'Rivotril', estoque: 10})
  }

  buildForm(){
    console.log(this);

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      estoque: [0, (Validators.required, this.validacaoEstoque.bind(this))],
      preco: [0, (Validators.required, this.validacaoEstoque.bind(this))]
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
    if(this.form.valid) {
      console.log(this.form.getRawValue());
    }
  }

}
