import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VendaRequest } from '../interface/request/venda-request';
import { SucessoPadraoResponse } from '../interface/response/sucesso-padrao-response';
import { AutenticadorService } from './autenticador.service';
import { VendaResponse } from '../model/response/venda-response';
import { VendaProdutoResponse } from '../model/response/venda-produto-response';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient, private auth: AutenticadorService) { }

  consultar() {
    const url = environment.api + "/venda/consultar";
    return this.http.get<SucessoPadraoResponse<VendaResponse[]>>(url);
  }

  consultarPorId(id: string) {
    const url = environment.api + `/venda/consultar/${id}`;
    return this.http.get<SucessoPadraoResponse<VendaProdutoResponse>>(url);
  }

  consultarPorClienteCpf(cpf: string) {
    const url = environment.api + `/venda/consultar/cliente/${cpf}`;
    return this.http.get<SucessoPadraoResponse<VendaResponse[]>>(url);
  }

  alterar(request: any) {
    const url = environment.api + "/venda/alterar";
    return this.http.post<SucessoPadraoResponse<null>>(url, request);
  }

  cadastrar(request: VendaRequest) {
    const url = environment.api + "/venda/cadastrar";
    request.token = this.auth.recuperarToken().token;
    return this.http.post<SucessoPadraoResponse<null>>(url, request);
  }

  deletar(id: string) {
    const url = environment.api + `/venda/deletar/${id}`;
    return this.http.post<SucessoPadraoResponse<null>>(url, this.auth.recuperarToken());
  }
}
