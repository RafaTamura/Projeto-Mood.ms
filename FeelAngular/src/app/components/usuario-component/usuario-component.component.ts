import { UsuarioService } from './../../usuario.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/Usuario';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-usuario-component',
  templateUrl: './usuario-component.component.html',
  styleUrls: ['./usuario-component.component.css']
})

export class UsuarioComponentComponent implements OnInit {
  formulario: any ;
  tituloFormulario: string;

constructor(private usuarioService :UsuarioService){

}
// onde os componentes são inicializados
  ngOnInit(): void {
    this.tituloFormulario = 'Novo Usuario'
    this.formulario = new FormGroup({

      id: new FormControl(0),
      nome: new FormControl(null),
      senha: new FormControl(null),
      email: new FormControl(null)
    });
    }
    EnviarFormulario(): void{
      const usuario : Usuario = this.formulario.value;
      this.usuarioService.SalvarUsuario(usuario).subscribe()
  }
  }


