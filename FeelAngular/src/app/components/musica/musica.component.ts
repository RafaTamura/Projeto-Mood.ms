import { MusicaService } from './../../musica.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Musica } from 'src/app/Musica';


@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})

export class MusicaComponent implements OnInit{
  formulario: any ;
  tituloFormulario: string;
  musicas : Musica[];
  visibilidadeTabela : boolean = true
  visibilidadeFormulario : boolean = false

constructor(private musicaService :MusicaService){

}

  ngOnInit(): void {
    this.musicaService.PegarTodos().subscribe(resultado =>
      this.musicas = resultado)


    }
// Funcao para exibir o formulario de cadastro
    ExibirFormularioCadastro(): void{
      this.visibilidadeFormulario = true;
      this.visibilidadeTabela = false;
      this.tituloFormulario = 'Nova Música'
      this.formulario = new FormGroup({

        musicaId: new FormControl(0),
        musicaNome: new FormControl(null),
        musicaArtista: new FormControl(null),
        musicaEstilo: new FormControl(null),
        musicaFeeling: new FormControl(null),
        musicaLink: new FormControl(null)
      });
    }

// Funcao para Atualizar as musicas, exibe o formulário preenchido
    ExibirFormularioAtt(musicaId: number):void{
      this.visibilidadeFormulario=true;
      this.visibilidadeTabela=false;
      this.musicaService.PegarPeloId(musicaId).subscribe(resultado => {
        this.tituloFormulario = `Atualizar ${resultado.musicaNome} de ${resultado.musicaArtista}`;

        this.formulario = new FormGroup({
          musicaId: new FormControl(resultado.musicaId),
          musicaNome: new FormControl(resultado.musicaNome),
          musicaArtista: new FormControl(resultado.musicaArtista),
          musicaEstilo: new FormControl(resultado.musicaEstilo),
          musicaLink: new FormControl(resultado.musicaLink),
          musicaFeeling: new FormControl(resultado.musicaFeeling)
        })
      })
    }

// Função para enviar o formulario com os dados
    EnviarFormulario(): void{
      const musica : Musica = this.formulario.value;
      if(musica.musicaId > 0){
        this.musicaService.AtualizarUsuario(musica).subscribe((resultado) =>{
          this.visibilidadeFormulario = false;
          this.visibilidadeTabela = true;

          alert('Música Atualizada com Sucesso');
          this.musicaService.PegarTodos().subscribe((registros)=>{
            this.musicas = registros;
          })
        })
      } else {
      this.musicaService.SalvarUsuario(musica).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;

        alert('Música Inserida com Sucesso');
        this.musicaService.PegarTodos().subscribe(registros=>{
          this.musicas = registros;
      })
    })
  }
}

// Funcao para excluir a musica do banco de dados
ExcluirMusica(musica : Musica){
  self.location.reload();
  this.musicaService.ExcluirUsuario(musica).subscribe(() => {
    this.ExibirFormularioAtt
  })


    }
// Funcao para retornar, ele troca as exibicoes das paginas
Voltar(): void{
  this.visibilidadeTabela = true;
  this.visibilidadeFormulario = false;
      }
// Funcao para recarregar a pagina
  redirectLink(link: string) {
    window.open(link);
  }

  }
