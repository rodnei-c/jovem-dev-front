import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-content',
  templateUrl: './componente-content.component.html',
  styleUrl: './componente-content.component.scss'
})
export class ComponenteContentComponent {

  titulo = 'Hello World';
  meuLink = 'google.com';
  valorInput = '';

  meuMetodo(){
    alert('olá');
  }


}

