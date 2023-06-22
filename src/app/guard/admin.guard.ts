import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticadorService } from '../service/autenticador.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AutenticadorService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let usuario = this.auth.recuperarUsuario();
      
      if (usuario == null) {
          this.router.navigateByUrl('');
      }

      let admin = usuario?.nivel == 'admin';
      
      if (!admin) {
        this.router.navigateByUrl('dashboard');
      }

      return admin;
  }
  
}
