import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SucessoPadraoResponse } from '../interface/response/sucesso-padrao-response';
import { ProdutoRequest } from '../interface/request/produto-request';
import { AutenticadorService } from './autenticador.service';
import { ProdutoResponse } from '../model/response/produto-response';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient, private auth: AutenticadorService) { }

  consultar() {
    const url = environment.api + "/produto/consultar";
    return this.http.get<SucessoPadraoResponse<ProdutoResponse[]>>(url);
  }

  consultarPorId(id: string) {
    const url = environment.api + `/produto/consultar/${id}`;
    return this.http.get<SucessoPadraoResponse<ProdutoResponse>>(url);
  }

  alterar(request: ProdutoRequest) {
    const url = environment.api + "/produto/alterar";
    request.token = this.auth.recuperarToken().token;
    return this.http.post<SucessoPadraoResponse<null>>(url, request);
  }

  cadastrar(request: ProdutoRequest) {
    request.token = this.auth.recuperarToken().token;
    const url = environment.api + "/produto/cadastrar";
    return this.http.post<SucessoPadraoResponse<null>>(url, request);
  }

  deletar(id: string) {
    const url = environment.api + `/produto/deletar/${id}`;
    return this.http.post<SucessoPadraoResponse<null>>(url, this.auth.recuperarToken());
  }
}
