import { Injectable } from '@angular/core';
import { LoginResponse } from '../interface/response/login-response';
import { LocalStorageKeys } from '../enum/local-storage-keys';
import { TokenRequest } from '../interface/request/token-request';
import { TokenResponse } from '../interface/response/token-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {

  constructor(private router: Router) { }

  salvarUsuario(response: LoginResponse) {
    localStorage.setItem(LocalStorageKeys.user, JSON.stringify(response));
  }

  recuperarUsuario(): LoginResponse | null{
    let usuarioRecuperado = localStorage.getItem(LocalStorageKeys.user);
    if(usuarioRecuperado){
      return JSON.parse(usuarioRecuperado || "")
    }
    return null;
  }

  usuarioAdmin(): Boolean {
    return this.recuperarUsuario()?.nivel == "admin";
  }

  usuarioCliente(): Boolean {
    return this.recuperarUsuario()?.nivel == "cliente";
  }

  recuperarToken(): TokenRequest{
    let tokenRecuperado = (this.recuperarUsuario() as LoginResponse).token;
    return {token: tokenRecuperado};
  }

  estaAutenticado(): boolean{
    return this.recuperarUsuario() != null;
  }

  atualizarToken(response: TokenResponse) {
    let usuarioRecuperado = this.recuperarUsuario();
    if(usuarioRecuperado) {
      usuarioRecuperado.token = response.token;
      localStorage.setItem(LocalStorageKeys.user, JSON.stringify(usuarioRecuperado));
    }
  }

  deslogar() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
