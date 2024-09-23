import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private usuarioService: UsuarioService
  ) {

  }

  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({name: null})
  }

  buildForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }

  cadastrar(){
    console.log(this.form.getRawValue())
    if(this.form.valid){
      this.usuarioService.addString(this.form.getRawValue());
    }
  }

}
