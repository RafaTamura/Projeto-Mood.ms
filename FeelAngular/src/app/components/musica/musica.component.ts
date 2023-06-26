import { MusicaService } from './../../musica.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Musica } from 'src/app/Musica';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})

export class MusicaComponent implements OnInit{
  formulario: any ;
  tituloFormulario: string;
  musicas : Musica[];

constructor(private musicaService :MusicaService){

}
// onde os componentes são inicializados
  ngOnInit(): void {
    this.musicaService.PegarTodos().subscribe(resultado =>
      this.musicas = resultado)

    this.tituloFormulario = 'Nova Musica'
    this.formulario = new FormGroup({

      musicaId: new FormControl(0),
      musicaNome: new FormControl(null),
      musicaArtista: new FormControl(null),
      musicaEstilo: new FormControl(null),
      musicaFeeling: new FormControl(null),
      musicaLink: new FormControl(null)
    });
    }
    EnviarFormulario(): void{
      const musica : Musica = this.formulario.value;
      this.musicaService.SalvarUsuario(musica).subscribe()
      }}
