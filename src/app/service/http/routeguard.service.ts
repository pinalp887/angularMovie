import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{
  
  constructor(private loginService:AuthenticationService,private router:Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.loginService.isUserLoggedIn())
        return true;
      this.router.navigate(['']);
      return false;
    }
}
