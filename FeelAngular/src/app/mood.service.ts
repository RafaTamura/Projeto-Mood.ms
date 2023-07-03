import { Musica } from './Musica';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})

export class MoodService {

  url = 'https://localhost:7243/api/Musica/musica'

  constructor(private http: HttpClient) { }

// Funcao para retornar todos os dados das musicas da API (GET)
  PegarTodos(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.url)
    .pipe(
      retry(3)
      );
    }

}

