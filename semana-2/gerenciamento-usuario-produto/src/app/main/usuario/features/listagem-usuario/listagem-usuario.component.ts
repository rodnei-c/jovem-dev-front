import { Usuario } from './../../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.scss'
})
export class ListagemUsuarioComponent implements OnInit{


  form!: FormGroup;
  posts: any;
  usuarios: Array<Usuario> = [];
  contador: number = 1

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    console.log(usuarioService.getList());
  }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.getList();
    this.buildForm();
    this.form.patchValue({name: null});
  }

  buildForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }

  excluirUsuario(usuario: Usuario) {
    this.usuarioService.excluirUsuario(usuario.id!);
    this.atualizarListagem();
  }

  editarUsuario(id: number) {
    this.router.navigateByUrl(`usuario/cadastro/${id}`)
  }

  atualizarListagem(){
    this.usuarios = this.usuarioService.getList();
  }
}
