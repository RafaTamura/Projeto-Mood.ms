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
  searchText: any;
  musica:Musica[];

  url = 'https://localhost:7243/api/Musica/musica'

  constructor(private http: HttpClient) { }
  PegarPeloId(musicaId: number): Observable<Musica>{
    const apiUrl = `${this.url}/${musicaId}`;
    return this.http.get<Musica>(apiUrl)
  }

  PegarTodos(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.url)
      .pipe(
        retry(3)
      );
  }
  ProcurarFeel(musicaFeeling: string): Observable<Musica> {
    const apiUrl = `${this.url}/feeling/${musicaFeeling}`;
    return this.http.get<Musica>(apiUrl).pipe(retry(3));
      }



      SalvarUsuario(musica: Musica): Observable<any>{
        return this.http.post<Musica>(this.url,musica,httpOptions);
      }
      AtualizarUsuario(musica: Musica): Observable<any>{
        return this.http.put<Musica>(this.url + '/' + musica.musicaId, JSON.stringify(musica), httpOptions);
      }
      ExcluirUsuario(musica: Musica) : Observable<any>{
        return this.http.delete<Musica>(this.url + '/' + musica.musicaId)
        .pipe(
          retry(1)
        )
}
}
