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

// Funcao para retornar todos os dados do usuario da API (GET)
  PegarTodos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }

// Funcao para retornar o id do usuario da API (GET)
    PegarPeloId(id: number): Observable<Usuario>{
      const apiUrl = `${this.url}/${id}`;
      return this.http.get<Usuario>(apiUrl)
    }

// Funcao para enviar os dados do formulario para a API (POST)
    SalvarUsuario(usuario: Usuario): Observable<any>{
      return this.http.post<Usuario>(this.url,usuario,httpOptions);
    }
// Funcao para enviar os dados atualizados do formulario para a API (PUT)
    AtualizarUsuario(usuario: Usuario): Observable<any>{
      return this.http.put<Usuario>(this.url + '/' + usuario.id, JSON.stringify(usuario), httpOptions);
    }
// Funcao para excluir o dado da API (DELETE)
    ExcluirUsuario(usuario: Usuario) : Observable<any>{
      return this.http.delete<Usuario>(this.url + '/' + usuario.id)
      .pipe(
        retry(1))
    }

}
