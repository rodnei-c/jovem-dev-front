import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-cadastro',
  templateUrl: './component-cadastro.component.html',
  styleUrl: './component-cadastro.component.scss'
})
export class ComponentCadastroComponent {


  @Input() clientePai?: string;
  @Output() cliente = new EventEmitter<string>();

  nome: string = '';

  adicionar(){
    console.log(this.nome);
    this.cliente.emit(this.nome);
  }
}
