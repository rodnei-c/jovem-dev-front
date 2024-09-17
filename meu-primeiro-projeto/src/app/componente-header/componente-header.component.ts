import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-header',
  templateUrl: './componente-header.component.html',
  styleUrl: './componente-header.component.scss'
})
export class ComponenteHeaderComponent {
  @Input() tituloDoPai?: string;
  @Output() trocarTituloEvent = new EventEmitter<string>();

  @Input() pesquisaPai?: string;
  @Output() pesquisar = new EventEmitter<string>();

  titulo='Trier Sistemas';

  search: string = '';


  trocarTitulo(){
    this.trocarTituloEvent.emit('Novo Titulo');
  }

  eventEmit(){
    this.pesquisar.emit(this.search);
  }
}
