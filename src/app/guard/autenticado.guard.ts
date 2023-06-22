import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticadorService } from '../service/autenticador.service';

@Injectable({
    providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {
    constructor(private auth: AutenticadorService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let autenticado = this.auth.estaAutenticado();
        
        if (!autenticado) {
            this.router.navigateByUrl('');
        }

        return autenticado;
    }

}
