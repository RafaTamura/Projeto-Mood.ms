import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';
import { Observable, retry } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://localhost:7243/api/Usuario/usuario'

  constructor(private http: HttpClient) {}

    PegarTodos(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.url);
    }
    PegarPeloId(id: number): Observable<Usuario>{
      const apiUrl = `${this.url}/${id}`;
      return this.http.get<Usuario>(apiUrl)
    }
    SalvarUsuario(usuario: Usuario): Observable<any>{
      return this.http.post<Usuario>(this.url,usuario,httpOptions);
    }
    AtualizarUsuario(usuario: Usuario): Observable<any>{
      return this.http.put<Usuario>(this.url + '/' + usuario.id, JSON.stringify(usuario), httpOptions);
    }
    ExcluirUsuario(usuario: Usuario) : Observable<any>{
      return this.http.delete<Usuario>(this.url + '/' + usuario.id)
      .pipe(
        retry(1))
    }

}
