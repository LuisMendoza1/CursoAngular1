import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<PerfilComponent> {

  constructor(
    private _data: DataService,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._data.logueado) {
      alert('No tienes acceso!')
      this._router.navigate(['/iniciar-sesion'])
    } 
      return this._data.logueado;
  }

  canDeactivate (
    component: PerfilComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    
    console.log(component)
    console.log(currentRoute)
    console.log(currentState)
    console.log(nextState)
    if ( this._data.hasBeenModified) {
    confirm('Hay datos sin guardar, ¿seguro que deseas salir?')
    } else {
      return true
    }
  }
  
}
