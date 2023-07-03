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
  usuarioCadastrado: boolean

constructor(private usuarioService :UsuarioService){

}
ngOnInit(): void {
  this.usuarioService.PegarTodos().subscribe(registros => {
    this.usuarios = registros;
    this.usuarioCadastrado = this.usuarios.length > 0;
  });

// Controle para mostrar se o usuario esta cadastrado
  if (this.usuarios == null) {
    this.usuarioCadastrado = false;
  } else {
    this.usuarioCadastrado = true;
  }
}
// Funcao para exibir o formulario de cadastro
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

// Funcao para Atualizar as musicas, exibe o formulário preenchido
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
// Função para enviar o formulario com os dados
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
          self.location.reload();

    })
  })
}
}
// Função para excluir o usuario
    ExcluirUsuario(usuario : Usuario){
      self.location.reload();
      this.usuarioService.ExcluirUsuario(usuario).subscribe(() => {
        this.ExibirFormularioAtt
      })
  }

// Função para voltar a página
  Voltar(): void{
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
    }



}
