import { Usuario } from './../../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent implements OnInit{

  form!: FormGroup;
  posts: any;


  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: ActivatedRoute,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({name: null})
    this.router.params.subscribe(values => {
      values['id']

      const usuario = this.usuarioService.findById(values['id']);
      if(usuario){
      this.form.patchValue(usuario!);
      }
      console.log(usuario);
    })
  }

  buildForm(){
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required]
    });
  }

  cadastrar(){
    console.log(this.form.getRawValue())
    const usuarioCadastro = this.form.getRawValue();
    if(usuarioCadastro.id || usuarioCadastro.id == 0){
      this.usuarioService.editarUsuario(usuarioCadastro);
      this.route.navigateByUrl('usuario/listagem')
    } else {
      this.usuarioService.addString(this.form.getRawValue());
      this.form.reset();
    }
  }


}
