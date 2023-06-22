import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioAdminRequest } from '../interface/request/usuario-admin-request';
import { SucessoPadraoResponse } from '../interface/response/sucesso-padrao-response';
import { AutenticadorService } from './autenticador.service';
import { UsuarioResponse } from '../model/response/usuario-response';
import { UsuarioAlterarSenhaRequest } from '../model/request/usuario-alterar-senha-request';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private auth: AutenticadorService) { }

  consultar() {
    const url = environment.api + "/usuario/consultar";
    return this.http.get<SucessoPadraoResponse<UsuarioResponse[]>>(url);
  }

  consultarPorId(id: string) {
    const url = environment.api + `/usuario/consultar/${id}`;
    return this.http.get<SucessoPadraoResponse<UsuarioResponse>>(url);
  }

  cadastrarAdmin(request: UsuarioAdminRequest) {
    const url = environment.api + "/usuario/cadastrar/admin";
    request.token = this.auth.recuperarToken().token;
    return this.http.post<SucessoPadraoResponse<null>>(url, request);
  }

  deletar(id: string) {
    const url = environment.api + `/usuario/deletar/${id}`;
    return this.http.post<SucessoPadraoResponse<null>>(url, this.auth.recuperarToken());
  }

  alterarSenha(request: UsuarioAlterarSenhaRequest) {
    const url = environment.api + `/usuario/alterar/senha`;
    request.token = this.auth.recuperarToken().token;
    return this.http.post<SucessoPadraoResponse<null>>(url, request);
  }

}
