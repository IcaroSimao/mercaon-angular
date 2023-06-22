import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenRequest } from '../interface/request/token-request';
import { TokenResponse } from '../interface/response/token-response';
import { AutenticadorService } from './autenticador.service';
import { SucessoPadraoResponse } from '../interface/response/sucesso-padrao-response';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient, private auth: AutenticadorService) { }

  renovar() {
    if(this.auth.estaAutenticado()){
      const url = environment.api + "/token/renovar";
      this.http.post<SucessoPadraoResponse<TokenResponse>>(url, this.auth.recuperarToken()).subscribe((response) => {
        this.auth.atualizarToken(response.data);
      });
    }
  }
}
