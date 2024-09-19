import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Funcionario } from '../../models/Funcionario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {

  @Input() funcionarios : Funcionario[] = [];
  @Output() eventFuncEditar = new EventEmitter<Funcionario>();
  @Output() eventFuncExcluir = new EventEmitter<Funcionario>();

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe((valores) => {
      console.log(valores);
      const idFuncionario = valores['id'];
      console.log(idFuncionario);
    })
  }

  editarCliente(funcionario : any){
    this.eventFuncEditar.emit(funcionario)
  }

  excluirCliente(funcionario : any){
    this.eventFuncExcluir.emit(funcionario)
  }

}
