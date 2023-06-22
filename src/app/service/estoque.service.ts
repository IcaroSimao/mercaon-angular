import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EstoqueRequest } from '../interface/request/estoque-request';
import { SucessoPadraoResponse } from '../interface/response/sucesso-padrao-response';
import { AutenticadorService } from './autenticador.service';
import { EstoqueResponse } from '../model/response/estoque-response';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient, private auth: AutenticadorService) { }

  consultar() {
    const url = environment.api + "/estoque/consultar";
    return this.http.get<SucessoPadraoResponse<EstoqueResponse[]>>(url);
  }

  consultarPorId(id: string) {
    const url = environment.api + `/estoque/consultar/${id}`;
    return this.http.get<SucessoPadraoResponse<EstoqueResponse>>(url);
  }

  consultarPorProduto(nome: string) {
    const url = environment.api + `/estoque/consultar/produto/${nome}`;
    return this.http.get<SucessoPadraoResponse<EstoqueResponse[]>>(url);
  }

  alterar(request: any) {
    const url = environment.api + "/estoque/alterar";
    request.token = this.auth.recuperarToken().token;
    return this.http.post<SucessoPadraoResponse<null>>(url, request);
  }

  cadastrar(request: EstoqueRequest) {
    const url = environment.api + "/estoque/cadastrar";
    request.token = this.auth.recuperarToken().token;
    return this.http.post<SucessoPadraoResponse<null>>(url, request);
  }

  deletar(id: string) {
    const url = environment.api + `/estoque/deletar/${id}`;
    return this.http.post<SucessoPadraoResponse<null>>(url, this.auth.recuperarToken());
  }
}
