import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../interface/request/login-request';
import { LoginResponse } from '../interface/response/login-response';
import { SucessoPadraoResponse } from '../interface/response/sucesso-padrao-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logar(request: LoginRequest) {
    const url = environment.api + "/login";
    return this.http.post<SucessoPadraoResponse<LoginResponse>>(url, request);
  }

}
