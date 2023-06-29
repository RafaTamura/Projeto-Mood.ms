import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Musica } from 'src/app/Musica';
import { MoodService } from 'src/app/mood.service';


@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})

  export class MoodComponent implements OnInit{
    formulario: FormGroup ;
    tituloFormulario: string;
    musicas : Musica[];


  constructor(private moodService :MoodService){
    this.formulario = new FormGroup({
      musicaFeeling: new FormControl('')
    });
    this.tituloFormulario = 'Buscar por Feeling';
    this.musicas = [];

  }
  // onde os componentes são inicializados
    ngOnInit(): void {
      this.formulario = new FormGroup({
        musicaFeeling: new FormControl('') })
      this.moodService.PegarTodos().subscribe(resultado =>
        this.musicas = resultado)


      }
      EnviarFeel() : void{
        const feeling: string = this.formulario.value.musicaFeeling;
          this.moodService.ProcurarFeel(feeling).subscribe((resultado) => {
            this.musicas = [resultado];
          });
        }
        PesquisarYou():void{
            alert("funfou")
        }
      }
