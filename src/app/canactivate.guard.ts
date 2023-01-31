import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {

  /* canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */

  //necesita servicio de autenticacion primero (contiene metodos)
  // ng g s servicios/autenticacion
  constructor(private router: Router, private autenticacion: AutenticacionService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //si el user esta logueado puede
    
      if(this.autenticacion.isLoggedIn(state.url)){
        return true;
      }
      //de lo contrario, solo es enviado a login
      this.router.navigate(['/login']);
      return false;

  }
  
}
