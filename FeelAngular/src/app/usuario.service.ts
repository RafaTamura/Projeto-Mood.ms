import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';
import { Observable } from 'rxjs';
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
    PegarPeloId(usuarioId: number): Observable<Usuario>{
      const apiUrl = `${this.url}/${usuarioId}`;
      return this.http.get<Usuario>(apiUrl)
    }
    SalvarUsuario(usuario: Usuario): Observable<any>{
      return this.http.post<Usuario>(this.url,usuario,httpOptions);
    }
    AtualizarUsuario(usuario: Usuario): Observable<any>{
      return this.http.put<Usuario>(this.url, usuario, httpOptions);
    }
    ExcluirUsuario(usuarioId: number) : Observable<any>{
      const apiUrl = `${this.url}/${usuarioId}`;
      return this.http.delete<number>(apiUrl, httpOptions);
    }

}
