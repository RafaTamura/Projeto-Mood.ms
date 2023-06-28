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

export class MoodService {
  url = 'https://localhost:7243/api/Musica/musica'

  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.url)
      .pipe(
        retry(3) // Tratar erros
      );
  }
  ProcurarFeel(musicaFeeling: string): Observable<Musica> {
    const apiUrl = `${this.url}/feeling/${musicaFeeling}`; // Inclua a rota "feeling" antes do parâmetro
  return this.http.get<Musica>(apiUrl).pipe(retry(3));
      }
}
