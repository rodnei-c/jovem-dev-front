import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Client } from '../models/cliente';

@Component({
  selector: 'app-component-listagem',
  templateUrl: './component-listagem.component.html',
  styleUrl: './component-listagem.component.scss'
})
export class ComponentListagemComponent {


  @Output() editClientEvent = new EventEmitter<Client>();
  @Output() removeClientEvent = new EventEmitter<number>();
  @Input() clientes?: Array<Client>;

  deletar(id?: number) {
    if(id || id == 0){
      this.removeClientEvent.emit(id);
    }
  }
  editar() {
    this.editClientEvent.emit();
  }

}
