import { Injectable } from '@angular/core';
import { Usuario } from '../../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  user: Array<Usuario> = [];
  count = 0;

  constructor() { }

  addString(usuario: Usuario) {
    usuario.id = this.count;
    this.user.push(usuario);
    this.count++;
  }

  excluirUsuario(id: number) {
    this.user = this.user.filter(e => e.id != id);
  }

  editarUsuario(usuarioCadastro: Usuario){
    this.user.forEach(user => {
      if(user.id === usuarioCadastro.id) {
        user.name = usuarioCadastro.name;
      }
    });
    console.log(this.user);
  }

  findById(id: number){
    return this.user.find(user => user.id == id);
  }

  getList(){
    return this.user;
  }
}
