import { Musica } from './Musica';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class MusicaService {

  url = 'https://localhost:7243/api/Musica/musica'

    constructor(private http: HttpClient) {}
// Funcao para retornar todos os dados das musicas da API (GET)
    PegarTodos(): Observable<Musica[]>{
      return this.http.get<Musica[]>(this.url);
    }
// Funcao para retornar o id da musica da API (GET)
    PegarPeloId(musicaId: number): Observable<Musica>{
      const apiUrl = `${this.url}/${musicaId}`;
      return this.http.get<Musica>(apiUrl)
    }
// Funcao para enviar os dados do formulario para a API (POST)
    SalvarUsuario(musica: Musica): Observable<any>{
      return this.http.post<Musica>(this.url,musica,httpOptions);
    }
// Funcao para enviar os dados atualizados do formulario para a API (PUT)
      AtualizarUsuario(musica: Musica): Observable<any>{
        return this.http.put<Musica>(this.url + '/' + musica.musicaId, JSON.stringify(musica), httpOptions);
      }
// Funcao para excluir o dado da API (DELETE)
      ExcluirUsuario(musica: Musica) : Observable<any>{
        return this.http.delete<Musica>(this.url + '/' + musica.musicaId)
        .pipe(
          retry(1)
        )
      }

  }
