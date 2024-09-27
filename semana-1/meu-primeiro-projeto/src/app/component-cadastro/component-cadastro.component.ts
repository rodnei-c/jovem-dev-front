import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Client } from '../models/cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-cadastro',
  templateUrl: './component-cadastro.component.html',
  styleUrl: './component-cadastro.component.scss'
})
export class ComponentCadastroComponent implements OnChanges{


  // id: number = 0;
  // nome: string = '';

  // @Input() clientePai?: {
  //   id: number,
  //   nome: string
  // };
  // @Output() cliente = new EventEmitter<{
  //   id: number,
  //   nome: string
  // }>();
  @Output() addClientEvent = new EventEmitter<Client>();
  @Output() editClientEvent = new EventEmitter<Client>();
  @Input() clientEditing?: Client;

  constructor(private route: ActivatedRoute){
    this.route.params.subscribe((valores) => {
      console.log(valores);
      const idCliente = valores['id'];
      console.log(idCliente);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.clientEditing) {
      this.nome = this.clientEditing.name;
    }
  }

  nome?: string;
  id=1;
  // @Input() clientePai?: string;
  // @Output() cliente = new EventEmitter<{
  //   id: number,
  //   nome: string
  //   }>();
  // nome: string = '';

  adicionar(){
    if(this.nome && !this.clientEditing){

      this.addClientEvent.emit({id: this.id, name: this.nome });
      this.id++;
    } else if(this.clientEditing && this.nome){
      this.editClientEvent.emit({id: this.id, name: this.nome })
    }

    this.clientEditing = undefined;
    this.nome = '';
    // console.log(this.nome);
    // this.cliente.emit({
    //   id: this.id,
    //   nome: this.nome});
    // console.log(this.nome);
    // this.cliente.emit({
    //   id: 0,
    //   nome: this.nome
    // });
  }
}
