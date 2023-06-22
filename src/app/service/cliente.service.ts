import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClienteRequest } from '../interface/request/cliente-request';
import { SucessoPadraoResponse } from '../interface/response/sucesso-padrao-response';
import { ClienteResponse } from '../interface/response/cliente-response';
import { AutenticadorService } from './autenticador.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private auth: AutenticadorService) { }

  consultar() {
    const url = environment.api + "/cliente/consultar";
    return this.http.get<SucessoPadraoResponse<ClienteResponse[]>>(url);
  }

  consultarPorCpf(cpf: string) {
    const url = environment.api + `/cliente/consultar/${cpf}`;
    return this.http.get<SucessoPadraoResponse<ClienteResponse>>(url);
  }

  alterar(request: ClienteRequest) {
    const url = environment.api + "/cliente/alterar";
    request.token = this.auth.recuperarToken().token;
    return this.http.post<SucessoPadraoResponse<null>>(url, request);
  }

  cadastrar(request: ClienteRequest) {
    const url = environment.api + "/cliente/cadastrar";
    return this.http.post<SucessoPadraoResponse<null>>(url, request);
  }

  deletar(cpf: string) {
    const url = environment.api + `/cliente/deletar/${cpf}`;
    return this.http.post<SucessoPadraoResponse<null>>(url, this.auth.recuperarToken());
  }
}
