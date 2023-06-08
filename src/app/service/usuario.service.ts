import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  logar() {
    const url = environment.api + "/usuario/logar";
    return this.http.get(url);
  }
  consultarTodos() {
    const url = environment.api + "/usuario/todos";
    return this.http.get(url);
  }


}
