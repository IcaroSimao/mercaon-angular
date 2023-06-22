import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, isEmpty, tap, throwError } from 'rxjs';
import { ErrorPadraoResponse } from '../interface/response/error-padrao-response';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { AutenticadorService } from '../service/autenticador.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class GenericoInterceptor implements HttpInterceptor {

  rotasTratadas: string[] = [(environment.api + "/token/renovar")];

  constructor(private toastr: ToastrService, private tokenService: TokenService, private auth: AutenticadorService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(event => {
        if(!this.rotasTratadas.includes(request.url) && this.auth.estaAutenticado()){
          this.tokenService.renovar();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = (error.error as ErrorPadraoResponse).mensagem;
        
        if(errorMessage == null || errorMessage.trim() == ""){
          errorMessage = error.message;
        } else if(errorMessage.includes('Token expirou')) {
          this.auth.deslogar()
        }

        this.toastr.error(errorMessage);

        const err = new Error(error.message); throwError(() => err);
        return throwError(() => err)
      })
    );
  }
}
