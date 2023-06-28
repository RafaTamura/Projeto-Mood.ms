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
  PegarFeel(musicaFeeling: number): Observable<Musica>{
    const apiUrl = `${this.url}/${musicaFeeling}`;
    return this.http.get<Musica>(apiUrl)
  }
}
