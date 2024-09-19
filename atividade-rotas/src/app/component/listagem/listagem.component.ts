import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Funcionario } from '../../models/Funcionario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {

  @Input() funcionarios : Funcionario[] = [];
  @Output() eventFuncEditar = new EventEmitter<Funcionario>();
  @Output() eventFuncExcluir = new EventEmitter<Funcionario>();

  constructor(private route: Router)
  {
    //   this.route.params.subscribe((valores) => {
    //   console.log(valores);
    //   const idFuncionario = valores['id'];
    //   console.log(idFuncionario);
    // })
  }

  editar(funcionario : Funcionario){
    this.route.navigateByUrl(`/cliente/cadastro/${funcionario.id}`);
    this.eventFuncEditar.emit(funcionario)
  }

  excluir(funcionario : Funcionario){
    this.eventFuncExcluir.emit(funcionario)
  }

}
