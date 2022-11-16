import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { ConfigServiceService } from '../services/config-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ConfigServiceService: ConfigServiceService, private Router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    var isAuthenticated = this.ConfigServiceService.getAuthStatus();

    // console.log(isAuthenticated, typeof(isAuthenticated))

    if (isAuthenticated == ""){
      this.Router.navigate(['/signin']);
    }

    return isAuthenticated;
    

  }
  
}
