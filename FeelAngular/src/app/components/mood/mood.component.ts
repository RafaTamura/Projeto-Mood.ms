import { MoodService } from './../../mood.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Musica } from 'src/app/Musica';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent implements OnInit {
  searchFeel: string;
  results: any[] = [];
  musicas : Musica[];
  emocoes : string[];
  visibilidadeEmocao: boolean = true;
  visibilidadeResultados: boolean = false;



  constructor(private http: HttpClient, private moodService : MoodService ) {}


  ngOnInit():void {
    this.moodService.PegarTodos().subscribe(resultado =>
     this.musicas = resultado)

  }
// Função para buscar o Sentimento cadastrado
  Search() {
    this.visibilidadeEmocao = false;
    this.visibilidadeResultados = true;
    if (this.searchFeel) {
      const apiUrl = 'https://localhost:7243/api/Musica/musica/feeling/';
      this.http.get<any[]>(`${apiUrl}${this.searchFeel}`).subscribe((data) => {
        this.results = data;
      });
    } else {
      this.results = [];
    }
  }
// Redireciona para o link cadastrado
  redirectLink(link: string) {
    window.open(link);
  }
//Retornar
 Voltar(){
  this.visibilidadeEmocao = true;
    this.visibilidadeResultados = false;
 }
}
