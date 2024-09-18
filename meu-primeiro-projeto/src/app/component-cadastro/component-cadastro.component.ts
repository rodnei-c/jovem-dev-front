import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-cadastro',
  templateUrl: './component-cadastro.component.html',
  styleUrl: './component-cadastro.component.scss'
})
export class ComponentCadastroComponent {

  id: number = 0;
  nome: string = '';

  @Input() clientePai?: {
    id: number,
    nome: string
  };
  @Output() cliente = new EventEmitter<{
    id: number,
    nome: string
  }>();



  adicionar(){
    console.log(this.nome);
    this.cliente.emit({
      id: this.id,
      nome: this.nome});
  }
}
