import { UsuarioService } from './../../usuario.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/Usuario';


@Component({
  selector: 'app-usuario-component',
  templateUrl: './usuario-component.component.html',
  styleUrls: ['./usuario-component.component.css']
})

export class UsuarioComponentComponent implements OnInit {
  formulario: any ;
  tituloFormulario: string;
  usuarios : Usuario[];
  visibilidadeTabela : boolean = true
  visibilidadeFormulario : boolean = false

constructor(private usuarioService :UsuarioService){

}
// onde os componentes são inicializados
  ngOnInit(): void {
    this.usuarioService.PegarTodos().subscribe(resultado =>
      this.usuarios = resultado)


    };
  ExibirFormularioCadastro(): void{
      this.visibilidadeFormulario = true;
      this.visibilidadeTabela = false;
      this.tituloFormulario = 'Novo Usuário'
      this.formulario = new FormGroup({

        id: new FormControl(0),
        nome: new FormControl(null),
        email: new FormControl(null),
        senha: new FormControl(null)
      });
    }

    ExibirFormularioAtt(id: number):void{
      this.visibilidadeFormulario=true;
      this.visibilidadeTabela=false;

      this.usuarioService.PegarPeloId(id).subscribe(resultado => {
        this.tituloFormulario = `Atualizar perfil do ${resultado.nome}`

        this.formulario = new FormGroup({
          id: new FormControl(resultado.id),
          nome: new FormControl(resultado.nome),
          email: new FormControl(resultado.email),
          senha: new FormControl(resultado.senha)
  })
})
}
    EnviarFormulario(): void{
      const usuario : Usuario = this.formulario.value;
      if(usuario.id > 0){
        this.usuarioService.AtualizarUsuario(usuario).subscribe((resultado) =>{
          this.visibilidadeFormulario = false;
          this.visibilidadeTabela = true;

          alert('Usuário Atualizada com Sucesso');
          this.usuarioService.PegarTodos().subscribe((registros)=>{
            this.usuarios = registros;
          })
        })
      } else {
      this.usuarioService.SalvarUsuario(usuario).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;

        alert('Usuário Cadastrado com Sucesso');
        this.usuarioService.PegarTodos().subscribe(registros=>{
          this.usuarios = registros;
    })
  })
}
    }
    ExcluirUsuario(usuario : Usuario){
      self.location.reload();
      this.usuarioService.ExcluirUsuario(usuario).subscribe(() => {
        this.ExibirFormularioAtt
      })
  }
  Voltar(): void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
    }

}
