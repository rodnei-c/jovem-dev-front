import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Funcionario } from '../../models/Funcionario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  @Output() addClientEvent = new EventEmitter<Funcionario>();


  // constructor(private route: ActivatedRoute){
  //   this.route.params.subscribe((valores) => {
  //     console.log(valores);
  //     const idCliente = valores['id'];
  //     console.log(idCliente);
  //   })
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if(this.clientEditing) {
  //     this.nome = this.clientEditing.name;
  //   }
  // }

  nome?: string = '';
  id=1;

  adicionar(){
      this.addClientEvent.emit({id: this.id, nome: this.nome });
      this.id++;
}
}
