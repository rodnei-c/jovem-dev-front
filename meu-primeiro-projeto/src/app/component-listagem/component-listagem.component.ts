import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-component-listagem',
  templateUrl: './component-listagem.component.html',
  styleUrl: './component-listagem.component.scss'
})
export class ComponentListagemComponent {

  tabela = document.getElementById('tabela');


}
